import { Body, Controller, Get, Param, Post, Query, UseGuards } from "@nestjs/common";
import { SensorService } from "src/sensor/sensor.service";
import { CreateSensorDataDTO } from "./dto/updateSensorData.dto";
import { SensorDataService } from "./sensorData.service";
import { MyAuthGuard } from "src/auth/auth.guard";
import { ApiCookieAuth } from "@nestjs/swagger";

@Controller("sensor-data")
export class SensorDataController {
    constructor(private readonly sensorDataService: SensorDataService) { }

    @ApiCookieAuth("acess_token")
    @UseGuards(MyAuthGuard)
    @Get(":sensorId")
    async findManySensorData(@Param("sensorId") sensorId: string, @Query("start") start: string, @Query("end") end: string) {
        return await this.sensorDataService.findManySensorData(sensorId, new Date(start), new Date(end));
    }

    @ApiCookieAuth("acess_token")
    @UseGuards(MyAuthGuard)
    @Post()
    async createSensorData(@Body() data: CreateSensorDataDTO) {
        return await this.sensorDataService.createSensorData(data);
    }
}