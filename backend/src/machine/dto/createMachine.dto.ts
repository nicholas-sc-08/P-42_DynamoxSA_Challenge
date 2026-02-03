import { IsEnum, IsString, IsNotEmpty } from "class-validator";
import { MachineType } from "@prisma/client";

export class CreateMachineDTO {
    @IsNotEmpty() @IsString()
    name: string;

    @IsEnum(MachineType, {message: "Machine type is invalid!"})
    type: MachineType;
}