import { Module } from "@nestjs/common";
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from "src/user/user.module";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtService } from "@nestjs/jwt";
import { MyAuthGuard } from "./auth.guard";

@Module({
    imports: [JwtModule.register({ global: true, secret: process.env.JWT_SECRET || 'secretKey', signOptions: { expiresIn: '1d' } })],
    controllers: [AuthController],
    providers: [AuthService, MyAuthGuard, JwtService],
})
export class AuthModule { }