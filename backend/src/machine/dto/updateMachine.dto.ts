import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { MachineType } from "@prisma/client";

export class UpdateMachineDTO {
    @IsOptional() @IsString() @IsNotEmpty()
    name?: string;

    @IsOptional() @IsEnum(MachineType) @IsNotEmpty()
    type?: MachineType;

    @IsString() @IsNotEmpty()
    userId: string;
}