import { Body, Controller, Delete, Get, Param, Post, Put, Query, Request, UseGuards } from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDTO } from './dto/createMachine.dto';
import { UpdateMachineDTO } from './dto/updateMachine.dto';
import { MyAuthGuard } from 'src/auth/auth.guard';
import { ApiCookieAuth } from '@nestjs/swagger';

@Controller('machine')
export class MachineController {
  constructor(private readonly machineService: MachineService) { }

  @ApiCookieAuth("acess_token")
  @UseGuards(MyAuthGuard)
  @Get()
  async findAllMachines(@Query("userId") userId: string) {
    return await this.machineService.findAllMachines(userId);
  }

  @ApiCookieAuth("acess_token")
  @UseGuards(MyAuthGuard)
  @Get(":id")
  async findUniqueMachine(@Param("id") id: string) {
    return await this.machineService.findUniqueMachine(id);
  }

  @ApiCookieAuth("acess_token")
  @UseGuards(MyAuthGuard)
  @Post()
  async createMachine(@Body() machine: CreateMachineDTO) {
    return await this.machineService.createMachine(machine, machine.userId);
  }

  @ApiCookieAuth("acess_token")
  @UseGuards(MyAuthGuard)
  @Put(":id")
  async updateMachine(@Param("id") id: string, @Body() data: UpdateMachineDTO, @Request() req) {
    const userId = req.user.id;
    return await this.machineService.updateMachine(id, data, userId);
  }

  @ApiCookieAuth("acess_token")
  @UseGuards(MyAuthGuard)
  @Delete(":id")
  async deleteMachine(@Param("id") id: string) {
    return await this.machineService.deleteMachine(id);
  }
}
