import { IsEmail, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class loginDTO {
    @IsUUID() @IsNotEmpty() @IsString()
    id: string;

    @IsEmail() @IsNotEmpty() @IsString()
    email: string;

    @IsString() @IsNotEmpty()
    password: string;
}