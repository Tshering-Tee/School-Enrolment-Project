import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class CreateCollegeRequest{
    
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    contactNumber: string;

    @IsString()
    gender: string;

    @IsString()
    highSchool: string;

    @IsString()
    graduateYear: string;

    @IsString()
    course: string;
    
    @IsString()
    college: string;


}