import { Injectable } from "@nestjs/common";

@Injectable()
export class GlobalVariable{
    static dbHost: string = "mongodb://localhost:27017";
    static productType = Object.freeze({
        FOOD: Symbol("food"),
        TOY: Symbol("toy"),
    })
}