import { UsersService } from './auth/users.service';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule],
  controllers: [AppController],
  providers: [
    UsersService, AppService],
})
export class AppModule { }
