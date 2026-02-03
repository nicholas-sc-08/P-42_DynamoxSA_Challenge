import { ModelName } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateSensorDTO {
    @IsNotEmpty() @IsString()
    sensorUid: string;

    @IsNotEmpty() @IsEnum(ModelName, { message: 'Model must be TcAg, TcAs or HF_PLUS' })
    model: ModelName;

    @IsNotEmpty() @IsUUID() @IsString()
    monitoringPointId: string;
}