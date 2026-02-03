import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/client";
import { MachineRepo } from "./machine.repository";
import { CreateMachineDTO } from "../dto/createMachine.dto";
import { UpdateMachineDTO } from "../dto/updateMachine.dto";

@Injectable()
export class PrismaMachineRepo extends MachineRepo {
    constructor(private readonly prisma: PrismaService) {
        super();
    }

    async findManyByUser(userId: string) {
        return this.prisma.machine.findMany({ where: { userId }, orderBy: { createdAt: "desc" } });
    }

    async findUnique(id: string) {
        return this.prisma.machine.findUnique({ where: { id } });
    }

    async create(data: CreateMachineDTO & { userId: string }) {
        return this.prisma.machine.create({ data });
    }

    async update(data: UpdateMachineDTO, id: string) {
        return this.prisma.machine.update({ where: { id }, data });
    }

    async delete(id: string) {
        this.prisma.machine.delete({ where: { id } });
    }
}