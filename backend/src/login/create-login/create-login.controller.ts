import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PrismaService } from "src/prisma.service";
import { CreateLoginResponse } from "./create-login-response";
import { CreateLoginRequest } from "./create-login-request";
import { ErrorResponseModel } from "src/Api/api.exception";

 
 @ApiTags('cu')
 @Controller('login')
 export class CreateLoginController{

    constructor(private readonly prismaService: PrismaService){}

    @Post()
    @ApiResponse({ status: HttpStatus.OK, description: '', type: CreateLoginResponse})
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: '', type:ErrorResponseModel})
    @ApiOperation({ operationId: 'createLogin'})
    @HttpCode(201)
    async execute(@Body() request: CreateLoginRequest): Promise<CreateLoginResponse>{
        const result = await this.prismaService.login.create({
            data: {
                email: request.email,
                password: request.password,
                Name: request.Name
            }
        });
        return {
            id: result.id,
        }
    }
    
 }