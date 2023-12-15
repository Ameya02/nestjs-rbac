import { ForbiddenException, Injectable } from '@nestjs/common';
import { SinginDto, SingupDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';

@Injectable({})
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}
  async signUp(dto: SingupDto) {
    try {
      const hashPassword = await argon.hash(dto.password);
      const user = await this.prisma.users.create({
        data: { email: dto.email, password: hashPassword, role: dto.role },
      });
      console.log(user);
      return this.signToken(user.userId, user.role);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('User already exists');
        }
      }
      throw error;
    }
  }
  async signIn(dto: SinginDto) {
    try {
      const user = await this.prisma.users.findUnique({
        where: { email: dto.email },
      });
      if (!user) {
        throw new ForbiddenException('User not found');
      }
      const isPasswordValid = await argon.verify(user.password, dto.password);
      if (!isPasswordValid) {
        throw new ForbiddenException('Password is invalid');
      }
      return this.signToken(user.userId, user.role);
    } catch (error) {
      throw error;
    }
  }
  async signToken(
    userId: number,
    role: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      role,
    };
    const secret = process.env.JWT_SECRET;

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
}
