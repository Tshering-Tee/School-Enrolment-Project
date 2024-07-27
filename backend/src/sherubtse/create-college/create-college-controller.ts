import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PrismaService } from "src/prisma.service";
import { ErrorResponseModel } from "src/Api/api.exception";
import { CreateCollegeResponse } from "./create-college-response";
import { CreateCollegeRequest } from "./create-college-request";


 
 @ApiTags('college')
 @Controller('College')
 export class CreateCollegeController{

    constructor(private readonly prismaService: PrismaService){}

    @Post()
    @ApiResponse({ status: HttpStatus.OK, description: '', type: CreateCollegeResponse})
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: '', type:ErrorResponseModel})
    @ApiOperation({ operationId: 'createSherubtse'})
    @HttpCode(201)
    async execute(@Body() request: CreateCollegeRequest): Promise<CreateCollegeResponse>{
        const result = await this.prismaService.college.create({
            data: {
                college: request.college,
                firstName: request.firstName,
                lastName: request.lastName,
                contactNumber: request.contactNumber,
                gender: request.gender,
                highSchool: request.highSchool,
                graduateYear: request.graduateYear,
                course: request.course
            }
        });
        return {
            id: result.id,
        }
    }
    
 }