import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PrismaService } from "src/prisma.service";
import { GetCollegeListResponse } from "./get-college-list-response";


@ApiTags('')
@Controller('College')
export class GetCollegeListController{
    constructor(private readonly prsmaService: PrismaService){}

    @Get()
    @ApiResponse({ status: HttpStatus.OK, description: 'List of College', type: [GetCollegeListResponse] })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'No College found'})
    @ApiOperation ({ operationId: 'getCollegeList' })
    @HttpCode(200)

    async execute(): Promise<GetCollegeListResponse[]> {
        const result = await this.prsmaService.college.findMany({});
        const response = result.map((x) =>{
            return {
                id: x.id,
                firstName: x.firstName, 
                lastName: x.lastName,
                contactNumber: x.contactNumber,
                gender: x.gender,
                highSchool: x.highSchool,
                graduateYear: x.graduateYear,
                course: x.course,
                college: x.college,
            };
        });

        return response;
    }
}