import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateSensorDataDTO {
    
    @IsNotEmpty() @IsNumber() @IsOptional()
    temp?: number;
    
    @IsNotEmpty() @IsNumber() @IsOptional()
    vibration?: number;
    
    @IsNotEmpty() @IsUUID() @IsString()
    sensorId: string;
    
    @IsNotEmpty() @IsDate() @Type(() => Date)
    timestamp: Date;
}