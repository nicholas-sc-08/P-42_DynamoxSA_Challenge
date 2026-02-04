import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { MonitoringPointService } from "./monitoringPoint.service";
import { CreateMonitoringPointDTO } from "./dto/createMonitoringPoint.dto";
import { updateMonitoringPointDTO } from "./dto/updateMonitoringPoint.dto";
import { MyAuthGuard } from "src/auth/auth.guard";
import { ApiCookieAuth } from "@nestjs/swagger";

@Controller("monitoring-point")
export class MonitoringPointController {
    constructor(private readonly monitoringPointService: MonitoringPointService) { }

    @ApiCookieAuth("acess_token")
    @UseGuards(MyAuthGuard)
    @Get()
    async findAllPaginatedPoints(@Query("page") page: string = "1") {
        const pageNumber = Math.max(1, Number(page));
        return await this.monitoringPointService.findAllPaginatedPoints(pageNumber);
    }

    @ApiCookieAuth("acess_token")
    @UseGuards(MyAuthGuard)
    @Get(":id")
    async findMonitoringPointById(@Param("id") id: string) {
        return await this.monitoringPointService.findMonitoringPointById(id);
    }

    @ApiCookieAuth("acess_token")
    @UseGuards(MyAuthGuard)
    @Post()
    async createMonitoringPoint(@Body() data: CreateMonitoringPointDTO) {
        return await this.monitoringPointService.createMonitoringPoint(data);
    }

    @ApiCookieAuth("acess_token")
    @UseGuards(MyAuthGuard)
    @Put(":id")
    async updateMonitoringPoint(@Param() id: string, @Body() data: updateMonitoringPointDTO) {
        return await this.monitoringPointService.updateMonitoringPoint(data, id);
    }

    @ApiCookieAuth("acess_token")
    @UseGuards(MyAuthGuard)
    @Delete(":id")
    async deleteMonitoringPoint(@Param() id: string) {
        return await this.monitoringPointService.deleteMonitoringPoint(id);
    }
}