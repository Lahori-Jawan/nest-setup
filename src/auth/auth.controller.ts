import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { Public } from 'src/app/common/auth/public.meta';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.registerUser(createUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: any) {
    return this.authService.loginUser(loginUserDto);
  }
}
