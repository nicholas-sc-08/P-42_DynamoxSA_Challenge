import { IsEnum, IsString, IsNotEmpty } from "class-validator";
import { MachineType } from "@prisma/client";

export class CreateMachineDTO {
    @IsNotEmpty() @IsString()
    name: string;

    @IsEnum(MachineType)
    type: MachineType;
}