import { Module } from "@nestjs/common";
import { CreateLoginController } from "src/login/create-login/create-login.controller";
import { GetMemberListController } from "src/login/get-member-list/get-member-list.controller";
import { GetLoginController } from "src/login/get-member/get-member.controller";
import { PrismaModule } from "src/prisma.module";
import { CreateCollegeController} from "src/sherubtse/create-college/create-college-controller";
import { DeleteCollegeController } from "src/sherubtse/delete-college/delete-college-controller";
import { GetCollegeListController } from "src/sherubtse/get-college-list/get-college-list-controller";
import { GetCollegeController } from "src/sherubtse/get-college/get-college-controller";
import { UpdateCollegeController } from "src/sherubtse/update-college/update-college.controller";

@Module({
    imports: [PrismaModule],
    controllers: [
        CreateLoginController,
        GetLoginController,
        GetMemberListController,
        CreateCollegeController,
        GetCollegeController,
        GetCollegeListController,
        DeleteCollegeController,
        UpdateCollegeController
        
    ],

    providers:[],
    exports: [],
})

export class ApiModule{}