import { Module } from "@nestjs/common";
import { MonitoringPointController } from "./monitoringPoint.controller";
import { MonitoringPointService } from "./monitoringPoint.service";
import { PrismaService } from "src/prisma/client";
import { PrismaMonitoringPoint } from "./repository/prismaMonitoringPoint.repository";

@Module({
    controllers: [MonitoringPointController],
    providers: [MonitoringPointService, PrismaService, { provide: "MonitoringPointRepo", useClass: PrismaMonitoringPoint }]
})
export class MonitoringPointModule { }