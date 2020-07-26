
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';

import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService,
    private readonly userService: UsersService) { }
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any): Promise<any> {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('users')
  getUsers(@Request() req) {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('allusers')
  getAllUsers(@Request() req) {
    this.userService.findAll().subscribe(req => {
      console.warn(req.data);
      return req.data;
    });

  }
}