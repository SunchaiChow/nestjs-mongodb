import { IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    readonly name: string;
    @IsString()
    readonly category: string;
    @IsString()
    readonly imgPath: string;
}