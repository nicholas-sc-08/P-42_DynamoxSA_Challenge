import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { SensorRepo } from "./repository/sensor.repository";
import { CreateSensorDTO } from "./dto/createSensor.dto";
import { UpdateSensorDTO } from "./dto/updateSensor.dto";

@Injectable()
export class SensorService {
    constructor(private readonly sensorRepo: SensorRepo) { }

    async findManySensors() {
        return this.sensorRepo.findManySensors();
    }

    async findUniqueSensor(id: string) {
        const sensorExists = await this.sensorRepo.findUniqueSensor(id);
        if (sensorExists) {
            return sensorExists;
        }
        throw new NotFoundException(`Sensor with Id ${id} does not exists!`);
    }

    async createSensor(data: CreateSensorDTO) {
        const sensorAlreadyExists = await this.sensorRepo.findSensorByUid(data.sensorUid);
        if(sensorAlreadyExists) {
            throw new ConflictException(`Sensor with Uid ${data.sensorUid} already exists!`);
        }

        return this.sensorRepo.createSensor(data);
    }

    async updateSensor(data: UpdateSensorDTO, id: string) {
        const sensorExists = await this.sensorRepo.findUniqueSensor(id);
        if(!sensorExists) {
            throw new NotFoundException(`Sensor with id ${id} does not exists!`);
        }
    }
}