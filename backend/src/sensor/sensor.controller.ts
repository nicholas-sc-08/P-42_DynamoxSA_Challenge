import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { SensorService } from "./sensor.service";
import { CreateSensorDTO } from "./dto/createSensor.dto";
import { UpdateSensorDTO } from "./dto/updateSensor.dto";
import { MyAuthGuard } from "src/auth/auth.guard";
import { ApiCookieAuth } from "@nestjs/swagger";

@Controller("sensor")
export class SensorController {
    constructor(private readonly sensorService: SensorService) { }

    @ApiCookieAuth("acess_token")
    @UseGuards(MyAuthGuard)
    @Get()
    async findManySensors() {
        return await this.sensorService.findManySensors();
    }

    @ApiCookieAuth("acess_token")
    @UseGuards(MyAuthGuard)
    @Get(":id")
    async findUniqueSensor(@Param("id") id: string) {
        return await this.sensorService.findUniqueSensor(id);
    }

    @ApiCookieAuth("acess_token")
    @UseGuards(MyAuthGuard)
    @Post()
    async createSensor(@Body() data: CreateSensorDTO) {
        return await this.sensorService.createSensor(data);
    }

    @ApiCookieAuth("acess_token")
    @UseGuards(MyAuthGuard)
    @Put()
    async updateSensor(@Body() data: UpdateSensorDTO, @Param("id") id: string) {
        return await this.sensorService.updateSensor(data, id);
    }

    @ApiCookieAuth("acess_token")
    @UseGuards(MyAuthGuard)
    @Delete(":id")
    async deleteSensor(@Param() id: string) {
        return await this.sensorService.deleteSensor(id);
    }
}