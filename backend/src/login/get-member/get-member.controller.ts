import { Controller, Get, HttpCode, HttpStatus, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PrismaService } from "src/prisma.service";
import { GetLoginResponse } from "./get-member.response";



@ApiTags('co')
@Controller('login')
export class GetLoginController {
    constructor(private readonly prismaService: PrismaService){}

    @Get(':id')
    @ApiResponse({
        status: HttpStatus.OK,
        description: '',
    })

    @ApiOperation({ operationId: 'getmember'})
    @HttpCode(200)
    async execute(@Param('id') id:string): Promise<GetLoginResponse>{
        const result = await this.prismaService.login.findUnique({
            where: { id:id },
        });

        return {
            id: result.id,
            email: result.email,
            password: result.password,
            Name: result.Name
        } as GetLoginResponse;
    }
}