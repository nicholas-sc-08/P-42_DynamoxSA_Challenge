import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDTO } from './dto/createMachine.dto';

@Controller('machine')
export class MachineController {
  constructor(private readonly machineService: MachineService) { }

  @Get()
  async findAllMachines(@Query("userId") userId: string) {
    return this.machineService.findAllMachines(userId);
  }

  @Post()
  async createMachine(@Body() machine: CreateMachineDTO, userId: string) {
    return this.machineService.createMachine(machine, userId);
  }
}
