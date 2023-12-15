import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SingupDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  role: string;
}
export class SinginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
