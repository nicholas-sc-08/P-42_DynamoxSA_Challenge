import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { CreateUserDTO } from "../dto/createUser.dto";
import { UpdateUserDTO } from "../dto/updateUser.dto";

@Injectable()
export abstract class UserRepo {
    abstract findManyUsers(): Promise<User[]>;
    abstract findUniqueUser(id: string): Promise<User | null>;
    abstract findUserByEmail(email: string): Promise<User | null>;
    abstract createUser(data: CreateUserDTO): Promise<User>;
    abstract updateUser(data: UpdateUserDTO, id: string): Promise<User>;
    abstract deleteUser(id: string): Promise<void>;
}