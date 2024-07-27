import { Controller, Delete, HttpCode, HttpException, HttpStatus, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PrismaService } from "src/prisma.service";


@ApiTags('de')
@Controller('College') export class DeleteCollegeController{
    constructor(private readonly prismaService:PrismaService){}
    @Delete(':id')
    @ApiResponse({
        status: HttpStatus.NO_CONTENT,
        description:'',
    })
    @ApiOperation({ operationId : 'deleteCollege'})
    @HttpCode(204)
    async execute (@Param('id')id:string):Promise<void>{
        const result =  await this.prismaService.college.findUnique({
        where: {id:id},  
    });
    if (!result) throw new HttpException('College not found', HttpStatus.NOT_FOUND);
    await this.prismaService.college.delete({where:{id: id}})
    
}
}