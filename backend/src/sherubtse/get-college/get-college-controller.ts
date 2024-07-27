import { Controller, Get, HttpCode, HttpStatus, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PrismaService } from "src/prisma.service";
import { GetCollegeResponse } from "./get-college-response";




@ApiTags('co')
@Controller('College')
export class GetCollegeController {
    constructor(private readonly prismaService: PrismaService){}

    @Get(':id')
    @ApiResponse({
        status: HttpStatus.OK,
        description: '',
    })

    @ApiOperation({ operationId: 'getcollege'})
    @HttpCode(200)
    async execute(@Param('id') id:string): Promise<GetCollegeResponse>{
        const result = await this.prismaService.college.findUnique({
            where: { id:id },
        });

        return {
            id: result.id,
            firstName: result.firstName,
            lastName: result.lastName,
            contactNumber: result.contactNumber,
            gender: result.gender,
            highSchool: result.highSchool,
            graduateYear: result.graduateYear,
            course: result.course,
            college: result.college
        } as GetCollegeResponse;
    }
}