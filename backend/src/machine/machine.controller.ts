import { Controller, Get, Param, Query } from '@nestjs/common';
import { MachineService } from './machine.service';

@Controller('machine')
export class MachineController {
  constructor(private readonly machineService: MachineService) { }

  @Get()
  async findAllMachines(@Query("userId") userId: string) {
    return this.machineService.findAllMachines(userId);
  }
}
