import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../util/constants';
import { JwtStrategy } from '../jwt/jwt.stratergy';

@Module({
    imports: [UsersModule,
        PassportModule,
        JwtModule.register({
            // dont store here in real app
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
        }),],
    controllers: [],
    providers: [
        AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule { }
