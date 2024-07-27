import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    private _login: any;

    public get login(): any{
        return this._login;
    }

    public set test(value: any){
        this._login = value;
    }

    async onModuleInit() {
        await this.$connect();
    }
}