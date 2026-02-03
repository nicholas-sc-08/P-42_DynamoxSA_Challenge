import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { SensorService } from "src/sensor/sensor.service";
import { CreateSensorDataDTO } from "./dto/updateSensorData.dto";
import { SensorDataService } from "./sensorData.service";

@Controller("sensor-data")
export class SensorDataController {
    constructor(private readonly sensorDataService: SensorDataService) { }

    @Get(":sensorId")
    async findManySensorData(@Param("sensorId") sensorId: string, @Query("start") start: string, @Query("end") end: string) {
        return await this.sensorDataService.findManySensorData(sensorId, new Date(start), new Date(end));
    }

    @Post()
    async createSensorData(data: CreateSensorDataDTO) {
        return await this.sensorDataService.createSensorData(data);
    }
}