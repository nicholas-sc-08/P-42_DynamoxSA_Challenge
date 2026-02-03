import { Injectable } from "@nestjs/common";
import { UserRepo } from "./user.repository";
import { PrismaService } from "src/prisma/client";
import { CreateUserDTO } from "../dto/createUser.dto";
import { UpdateUserDTO } from "../dto/updateUser.dto";

@Injectable()
export class PrismaUserRepo extends UserRepo {
    constructor(private readonly prisma: PrismaService) {
        super();
    }

    async findManyUsers() {
        return await this.prisma.user.findMany();
    }

    async findUniqueUser(id: string) {
        return await this.prisma.user.findUnique({ where: { id }, include: { machines: true } });
    }

    async findUserByEmail(email: string) {
        return await this.prisma.user.findUnique({ where: { email } });
    }

    async createUser(data: CreateUserDTO) {
        return await this.prisma.user.create({ data });
    }

    async updateUser(data: UpdateUserDTO, id: string) {
        return await this.prisma.user.update({ where: { id }, data });
    }

    async deleteUser(id: string) {
        await this.prisma.user.delete({ where: { id } });
    }
}