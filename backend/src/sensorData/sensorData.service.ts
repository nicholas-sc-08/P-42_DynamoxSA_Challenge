import { Inject, Injectable } from "@nestjs/common";
import { SensorDataRepo } from "./repository/sensorData.repository";
import { Prisma } from "@prisma/client";
import { CreateSensorDataDTO } from "./dto/updateSensorData.dto";

@Injectable()
export class SensorDataService {
    constructor(@Inject("SensorDataRepo") private readonly sensorDataRepo: SensorDataRepo) { }

    async findManySensorData(sensorId: string, startTime: Date, endTime: Date) {
        return await this.sensorDataRepo.findManySensorData(sensorId, startTime, endTime);
    }

    async createSensorData(data: CreateSensorDataDTO) {
        return await this.sensorDataRepo.createSensorData(data);
    }
}