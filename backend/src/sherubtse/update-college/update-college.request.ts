import { ApiProperty } from "@nestjs/swagger";
import {  IsString } from "class-validator";

export class UpdateCollegeRequest{

    @ApiProperty()
    @IsString()
    readonly firstName: string;

    @ApiProperty()
    @IsString()
    readonly lastName:string;

    @ApiProperty()
    @IsString()
    readonly contactNumber:string;

    @ApiProperty()
    @IsString()
    readonly gender:string;

    @ApiProperty()
    @IsString()
    readonly highSchool:string;

    @ApiProperty()
    @IsString()
    readonly graduateYear:string;

    @ApiProperty()
    @IsString()
    readonly course:string;
    
    @ApiProperty()
    @IsString()
    readonly college:string;
}


