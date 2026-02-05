import { ApiProperty } from "@nestjs/swagger";
import { ModelName } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreateSensorDTO {
    @IsNotEmpty() @IsString()
    sensorUid: string;

    @ApiProperty({ enum: ModelName })
    @IsNotEmpty() @IsEnum(ModelName, { message: 'Model must be TcAg, TcAs or HF_PLUS' })
    model: ModelName;

    @IsNotEmpty() @IsUUID() @IsString()
    monitoringPointId: string;
}