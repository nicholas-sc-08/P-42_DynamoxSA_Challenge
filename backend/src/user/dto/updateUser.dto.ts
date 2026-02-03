import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UpdateUserDTO {
    @IsOptional() @IsString()
    name?: string;

    @IsOptional() @IsString() @IsEmail()
    email?: string;

    @IsOptional() @IsString() @MinLength(7) @MaxLength(12)
    password?: string;
}