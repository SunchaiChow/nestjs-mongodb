import { Model } from 'mongoose';
import { CreateShopDto } from './dto/create-shop.dto';
import { Shop } from './interface/shop.interface';
export declare class ShopService {
    private readonly shopModel;
    constructor(shopModel: Model<Shop>);
    create(createShopDto: CreateShopDto): Promise<Shop>;
    findAll(): Promise<(Shop & {
        _id: any;
    })[]>;
    findByTitle(title: any): Promise<(Shop & {
        _id: any;
    })[]>;
    updateView(id: any): Promise<void>;
    updateShop(body: any): Promise<void>;
    deleteById(id: any): Promise<import("mongodb").DeleteResult>;
}
