import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class GetLoginResponse{
    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly id:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly email:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly password:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly Name:string;
}


