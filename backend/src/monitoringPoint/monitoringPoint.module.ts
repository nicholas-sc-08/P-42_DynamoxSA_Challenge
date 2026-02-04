import { Module } from "@nestjs/common";
import { MonitoringPointController } from "./monitoringPoint.controller";
import { MonitoringPointService } from "./monitoringPoint.service";
import { PrismaService } from "src/prisma/client";
import { PrismaMonitoringPoint } from "./repository/prismaMonitoringPoint.repository";
import { JwtService } from "@nestjs/jwt";

@Module({
    controllers: [MonitoringPointController],
    providers: [MonitoringPointService, PrismaService, { provide: "MonitoringPointRepo", useClass: PrismaMonitoringPoint }, JwtService]
})
export class MonitoringPointModule { }