import { Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe, } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto, LoginDto } from "./user.dto";
import { EmailValidatorPipe } from "./email.pipe";

@Controller("/user")
export class UserController {
    constructor(
        private userService: UserService) { }
    @Get()
    find() {
        return this.userService.find();
    }
    @Post()
    create(@Body() userDto: CreateUserDto) {
        this.userService.create(userDto);
        return "Create success"
    }
    @Post("/register")
    register(@Body("email", EmailValidatorPipe) email: string) {
        return email;
    }
    @Post("/login")
    login(@Body() loginDto: LoginDto) {
        return loginDto; 
    }
    @Get("/:id")
    findOne(@Param("id", ParseIntPipe) id: number) {
        return this.userService.findOne(id)
    }
}