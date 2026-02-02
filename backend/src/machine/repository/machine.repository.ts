import { Machine } from "@prisma/client";
import { CreateMachineDTO } from "../dto/createMachine.dto";
import { UpdateMachineDTO } from "../dto/updateMachine.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class MachineRepo {
    abstract findManyByUser(userId: string): Promise<Machine[]>;
    abstract findUnique(id: string): Promise<Machine | null>;
    abstract create(data: CreateMachineDTO, userId: string): Promise<Machine>;
    abstract update(data: UpdateMachineDTO, id: string): Promise<Machine>;
    abstract delete(id: string): Promise<void>;
}