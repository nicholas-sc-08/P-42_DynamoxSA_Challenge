import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/createUser.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async findManyUsers() {
        return await this.userService.findManyUsers();
    }

    @Get(":id")
    async findUniqueUser(@Param() id: string) {
        return await this.userService.findUniqueUser(id);
    }

    @Post()
    async createUser(@Body() data: CreateUserDTO) {
        return await this.userService.createUser(data);
    }
}