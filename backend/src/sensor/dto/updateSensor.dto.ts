import { ModelName } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateSensorDTO {
    @IsNotEmpty() @IsString() @IsOptional()
    sensorUid?: string;

    @IsNotEmpty() @IsEnum(ModelName) @IsOptional()
    model: ModelName;

    @IsNotEmpty() @IsUUID() @IsOptional()
    monitoringPointId: string;
}