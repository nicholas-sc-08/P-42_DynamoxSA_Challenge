import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UpdateUserDTO } from "./dto/updateUser.dto";
import { MyAuthGuard } from "src/auth/auth.guard";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UseGuards(MyAuthGuard)
    @Get()
    async findManyUsers() {
        return await this.userService.findManyUsers();
    }

    @UseGuards(MyAuthGuard)
    @Get(":id")
    async findUniqueUser(@Param("id") id: string) {
        return await this.userService.findUniqueUser(id);
    }

    @UseGuards(MyAuthGuard)
    @Post()
    async createUser(@Body() data: CreateUserDTO) {
        return await this.userService.createUser(data);
    }

    @UseGuards(MyAuthGuard)
    @Put(":id")
    async updateUser(@Body() data: UpdateUserDTO, @Param("id") id: string) {
        return await this.userService.updateUser(data, id);
    }

    @UseGuards(MyAuthGuard)
    @Delete(":id")
    async deleteUser(@Param("id") id: string) {
        return await this.userService.deleteUser(id);
    }
}