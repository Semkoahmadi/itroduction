import { IsEmail, IsNumber, IsString,Length } from "class-validator";

export class CreateUserDto {
    @IsNumber({}, { message: "dorst vard kon" })
    id: number;
    @IsString()
    @Length(4,25,{message:"sorry for everything"})
    name: string;
    @IsString()
    @Length(7,20,{message:"sorry for everything"})
    job: string;

}

export class LoginDto {
    @IsEmail({}, {message:"pleas cuurent login"})
    email:string;
}