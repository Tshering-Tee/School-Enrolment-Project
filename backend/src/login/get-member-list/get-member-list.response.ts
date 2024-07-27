import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class GetMember {
    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly id: String;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly email: String;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly password: String;

    @ApiProperty()
    @IsOptional()
    @IsString()
    readonly Name: String;
}