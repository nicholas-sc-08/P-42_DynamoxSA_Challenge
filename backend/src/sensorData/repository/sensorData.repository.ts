import { Injectable } from "@nestjs/common";
import { Prisma, SensorData } from "@prisma/client";
import { CreateSensorDataDTO } from "../dto/updateSensorData.dto";

@Injectable()
export abstract class SensorDataRepo {
    abstract findManySensorData(sensorId: string, startTime: Date, endTime: Date): Promise<SensorData[]>;
    abstract createSensorData(data: CreateSensorDataDTO): Promise<SensorData>;
}