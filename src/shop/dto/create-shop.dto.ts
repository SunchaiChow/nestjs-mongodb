import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateShopDto{
    @IsString()
    readonly title: string;
    @IsString()
    readonly description: string;
    @IsString()
    readonly imgPath: string;
    @IsArray()
    readonly products: Array<[{category: string, name: string}]>;
}