import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDTO {
    @IsNotEmpty() @IsString()
    name: string;

    @IsNotEmpty() @IsString() @IsEmail()
    email: string;

    @IsNotEmpty() @IsString() @MinLength(7) @MaxLength(12)
    password: string;
}