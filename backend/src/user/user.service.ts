import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UserRepo } from "./repository/user.repository";
import { BcryptService } from "src/bcrypt/bcrypt.service";
import { UpdateUserDTO } from "./dto/updateUser.dto";

@Injectable()
export class UserService {
    constructor(@Inject("UserRepo") private readonly userRepo: UserRepo, private readonly hashService: BcryptService) { }

    async findManyUsers() {
        return await this.userRepo.findManyUsers();
    }

    async findUniqueUser(id: string) {
        return await this.userRepo.findUniqueUser(id);
    }

    async createUser(data: CreateUserDTO) {
        const userExists = await this.userRepo.findUserByEmail(data.email);

        if (userExists) {
            throw new ConflictException("Email already exists!");
        }

        const hashedPassword = await this.hashService.hash(data.password);
        return await this.userRepo.createUser({ ...data, password: hashedPassword });
    }

    async updateUser(data: UpdateUserDTO, id: string) {
        if (data.email) {
            const emailExists = await this.userRepo.findUserByEmail(data.email);
            if (emailExists) {
                throw new ConflictException("New email it's already in use.");
            }
        }

        if (data.password) {
            data.password = await this.hashService.hash(data.password);
        }

        return this.userRepo.updateUser(data, id);
    }

    async deleteUser(id: string) {
        await this.userRepo.deleteUser(id);
    }
}