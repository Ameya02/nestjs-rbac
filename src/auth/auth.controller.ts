import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SinginDto, SingupDto } from './dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signUp(@Body() dto: SingupDto) {
    return this.authService.signUp(dto);
  }
  @Post('signin')
  signIn(@Body() dto: SinginDto) {
    return this.authService.signIn(dto);
  }
}
