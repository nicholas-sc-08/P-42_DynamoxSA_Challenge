import { Injectable, UnauthorizedException } from "@nestjs/common";
import { loginDTO } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) { }

    async login(user: loginDTO) {
        if (user.email != 'admin@dynamox.com' || user.password != "123456") {
            throw new UnauthorizedException("Credenciais inválidas");
        }

        const payload = { email: user.email, sub: user.id };
        return this.jwtService.sign(payload);
    }
}