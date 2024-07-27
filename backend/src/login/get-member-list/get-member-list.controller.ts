import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PrismaService } from "src/prisma.service";
import { GetMember } from "./get-member-list.response";


@ApiTags('')
@Controller('login')
export class GetMemberListController{
    constructor(private readonly prsmaService: PrismaService){}

    @Get()
    @ApiResponse({ status: HttpStatus.OK, description: 'List of Customer', type: [GetMember] })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'No Customer found'})
    @ApiOperation ({ operationId: 'getCustomerList' })
    @HttpCode(200)

    async execute(): Promise<GetMember[]> {
        const result = await this.prsmaService.login.findMany({});
        const response = result.map((x) =>{
            return {
                id: x.id,
                email: x.email, 
                password: x.password,
                Name: x.Name,
            };
        });

        return response;
    }
}