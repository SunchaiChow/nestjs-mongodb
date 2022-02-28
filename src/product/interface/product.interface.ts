import { Document } from "mongoose";

export interface Product extends Document{
    readonly category: string,
    readonly name: string,
    readonly imgPath: string,
}