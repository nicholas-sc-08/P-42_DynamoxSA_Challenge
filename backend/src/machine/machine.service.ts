import { Inject, Injectable } from '@nestjs/common';
import { MachineRepo } from './repository/machine.repository';
import { CreateMachineDTO } from './dto/createMachine.dto';
import { UpdateMachineDTO } from './dto/updateMachine.dto';

@Injectable()
export class MachineService {
    constructor(@Inject("MachineRepo") private readonly machineRepo: MachineRepo) { }

    async findAllMachines(userId: string) {
        return await this.machineRepo.findManyByUser(userId);
    }

    async findUniqueMachine(id: string) {
        return await this.machineRepo.findUnique(id);
    }

    async createMachine(data: CreateMachineDTO, userId: string) {
        return await this.machineRepo.create(data, userId);
    }

    async updateMachine(data: UpdateMachineDTO, userId: string) {
        return await this.machineRepo.update(data, userId);
    }

    async deleteMachine(id: string) {
        await this.machineRepo.delete(id);
    }
}
