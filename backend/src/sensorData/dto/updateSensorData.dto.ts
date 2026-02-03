import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateSensorDataDTO {
    @IsNotEmpty() @IsOptional() @IsUUID() @IsString()
    sensorId?: string;

    @IsNotEmpty() @IsOptional() @IsNumber()
    temp?: number;

    @IsNotEmpty() @IsOptional() @IsNumber()
    vibration?: number;

    @IsNotEmpty() @IsOptional() @IsDate()
    timestamp?: Date;
}