import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { RolesGuard } from './auth/guard/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PrismaModule,
    JwtModule.register({ secret: process.env.JWT_SECRET }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
