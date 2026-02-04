import { Controller, Get, Res } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Controller("/auth")
export class AuthController {
    constructor(private jwtService: JwtService) { }

    @Get('login')
    async login(@Res({ passthrough: true }) res) {
        const payload = { userId: "123", email: "dynamox@gmail.com", password: "123456" };
        res.cookie("user_token", this.jwtService.sign(payload), {
            expiresIn: Date.now() + 3600000
        });
        return { message: "The user id is 123 to manage the machines" };
    }

    @Get("logout")
    async logout(@Res({ passthrough: true }) res) {
        res.clearCookie("user_token");
        return { message: "Logout sucessfully!"};
    }
}