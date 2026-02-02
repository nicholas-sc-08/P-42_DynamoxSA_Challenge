import { IsEnum, IsOptional, IsString } from "class-validator";
import { MachineType } from "@prisma/client";

export class UpdateMachineDTO {
    @IsOptional() @IsString()
    name?: string;

    @IsOptional() @IsEnum(MachineType)
    type?: MachineType;
}