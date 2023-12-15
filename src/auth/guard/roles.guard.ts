import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../enums';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwt: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const require_roles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    const payload = await context.switchToHttp().getRequest();
    const token = payload.rawHeaders[1].split(' ')[1];
    const user = this.jwt.decode(token);

    if (!require_roles) {
      return true;
    }
    if (user && user.role) {
      return require_roles.includes(user.role);
    }
  }
}
