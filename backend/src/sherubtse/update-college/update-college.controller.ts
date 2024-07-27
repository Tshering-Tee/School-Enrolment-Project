import { Body, Controller, HttpCode, HttpStatus, Param, Put } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PrismaService } from "src/prisma.service";
import { UpdateCollegeRequest } from "./update-college.request";


@ApiTags('cb')
@Controller('College')
export class UpdateCollegeController {
    constructor(private readonly prismaService: PrismaService){}

    @Put(':id')
    @ApiResponse({
        status: HttpStatus.NO_CONTENT,
    })

    @ApiOperation({ operationId: 'updateCollege'})
    @HttpCode(204)
    async execute(@Param('id') id: string, @Body() request: UpdateCollegeRequest): Promise<void>{
        await this.prismaService.college.update({
            where: {
                id: id,
            },
            data: {
                firstName: request.firstName,
                lastName: request.lastName,
                contactNumber: request.contactNumber,
                gender: request.gender,
                highSchool: request.highSchool,
                graduateYear: request.graduateYear,
                course: request.course,
                college: request.college,
            },
        });
    }
    
}