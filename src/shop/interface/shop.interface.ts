import { Document } from 'mongoose';

export interface Shop extends Document{
    readonly title: string,
    readonly description: string,
    readonly imgPath: string,
    readonly products: Array<[{category: string , name: string}]>,
}