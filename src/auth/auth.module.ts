import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [UsersModule],
    controllers: [],
    providers: [
        AuthService,LocalStrategy],
})
export class AuthModule { }
