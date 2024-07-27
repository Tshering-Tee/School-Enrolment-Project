import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateLoginRequest{
    
    @ApiProperty()
    @IsString()
    @IsEmail()
    email: string;

    @IsString() 
    password: string;

    @IsString()
    Name: string;
}