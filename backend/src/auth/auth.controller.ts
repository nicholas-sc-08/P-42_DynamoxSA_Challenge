import { Body, Controller, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { loginDTO } from "./dto/login.dto";
import type { Response } from "express";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post("login")
    async login(@Body() data: loginDTO, @Res({ passthrough: true }) res: Response) {
        const token = await this.authService.login(data);
        res.cookie('acess_token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 24 * 60 * 60 * 1000
        });

        return { message: "Authenticated" };
    }

    @Post("logout")
    async logout(@Res({ passthrough: true }) res: Response) {
        res.clearCookie('acess_token');
        return { message: "Logout with sucess" };
    }
}