import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class GetCollegeListResponse{
    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly id:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly firstName:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly lastName:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly contactNumber:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly gender:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly highSchool:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly graduateYear:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly course:string;
    
    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly college:string;
}


