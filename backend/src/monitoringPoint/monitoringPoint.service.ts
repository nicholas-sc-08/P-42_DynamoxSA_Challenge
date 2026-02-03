import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { MonitoringPointRepo } from "./repository/monitoringPoint.repository";
import { CreateMonitoringPointDTO } from "./dto/createMonitoringPoint.dto";
import { updateMonitoringPointDTO } from "./dto/updateMonitoringPoint.dto";

@Injectable()
export class MonitoringPointService {
    constructor(@Inject("MonitoringPointRepo") private readonly monitoringPointRepo: MonitoringPointRepo) { }

    async findAllPaginatedPoints(page: number) {
        return await this.monitoringPointRepo.findAllPaginatedPoints(page);
    }

    async findMonitoringPointById(id: string) {
        const monitoringPoint = await this.monitoringPointRepo.findMonitoringPointById(id);
        if (monitoringPoint) {
            return monitoringPoint;
        }
        throw new NotFoundException(`Monitoring Point with id ${id} does not exists!`);
    }

    async createMonitoringPoint(data: CreateMonitoringPointDTO) {
        return await this.monitoringPointRepo.createMonitoringPoint(data);
    }

    async updateMonitoringPoint(data: updateMonitoringPointDTO, id: string) {
        const monitoringPointExists = await this.monitoringPointRepo.findMonitoringPointById(id);
        if (monitoringPointExists) {
            return await this.monitoringPointRepo.updateMonitoringPoint(data, id);
        }
        throw new NotFoundException(`Monitoring Point with id ${id} does not exists!`);
    }

    async deleteMonitoringPoint(id: string) {
        const monitoringPointExists = await this.monitoringPointRepo.findMonitoringPointById(id);
        if (monitoringPointExists) {
            await this.monitoringPointRepo.deleteMonitoringPoint(id);
            return { message: "Monitoring Point has been deleted sucessfully!", statusCode: 200 }
        }
        throw new NotFoundException(`Monitoring Point with id ${id} does not exists!`);
    }
}