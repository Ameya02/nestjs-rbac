// src/user/user.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser, Roles } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { Role } from '../auth/enums';
import { Users } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('/admin')
  @Roles(Role.ADMIN)
  AdminAcess(@GetUser() user: Users) {
    return user;
  }
  @Get('/manager')
  @Roles(Role.MANAGER)
  ManagerAcess(@GetUser() user: Users) {
    return user;
  }
  @Get('/users')
  @Roles(Role.USER)
  UserAcess(@GetUser() user: Users) {
    return user;
  }
}
