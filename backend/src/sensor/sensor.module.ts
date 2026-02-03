import { Module } from "@nestjs/common";
import { SensorController } from "./sensor.controller";
import { SensorService } from "./sensor.service";
import { PrismaService } from "src/prisma/client";
import { PrismaSensorRepo } from "./repository/prismaSensor.repository";
import { PrismaMonitoringPoint } from "src/monitoringPoint/repository/prismaMonitoringPoint.repository";

@Module({
    controllers: [SensorController],
    providers: [SensorService, PrismaService, {provide: "SensorRepo", useClass: PrismaSensorRepo}, {provide: "MonitoringPointRepo", useClass: PrismaMonitoringPoint}]
})
export class SensorModule { }