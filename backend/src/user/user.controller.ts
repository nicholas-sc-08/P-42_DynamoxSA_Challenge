import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UpdateUserDTO } from "./dto/updateUser.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findManyUsers() {
        return await this.userService.findManyUsers();
    }

    @Get(":id")
    async findUniqueUser(@Param("id") id: string) {
        return await this.userService.findUniqueUser(id);
    }

    @Post()
    async createUser(@Body() data: CreateUserDTO) {
        return await this.userService.createUser(data);
    }

    @Put(":id")
    async updateUser(@Body() data: UpdateUserDTO, @Param("id") id: string) {
        return await this.userService.updateUser(data, id);
    }

    @Delete(":id")
    async deleteUser(@Param("id") id: string) {
        return await this.userService.deleteUser(id);
    }
}