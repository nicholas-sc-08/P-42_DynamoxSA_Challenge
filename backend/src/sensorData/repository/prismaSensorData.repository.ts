import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/client";
import { SensorDataRepo } from "./sensorData.repository";
import { CreateSensorDataDTO } from "../dto/updateSensorData.dto";

@Injectable()
export class PrismaSensorDataRepo extends SensorDataRepo {
    constructor(private readonly prisma: PrismaService) {
        super();
    }

    async findManySensorData(sensorId: string, startTime: Date, endTime: Date) {
        return await this.prisma.sensorData.findMany({ where: { sensorId, timestamp: { gte: startTime, lte: endTime } }, orderBy: { timestamp: "asc" } });
    }

    async createSensorData(data: CreateSensorDataDTO) {
        return await this.prisma.sensorData.create({ data: data as any });
    }
}