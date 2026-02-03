import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PrismaService } from "src/prisma/client";
import { PrismaUserRepo } from "./repository/prismaUser.repository";
import { BcryptService } from "src/bcrypt/bcrypt.service";

@Module({
    controllers: [UserController],
    providers: [UserService, PrismaService, { provide: "UserRepo", useClass: PrismaUserRepo }, BcryptService]
})
export class UserModule { }