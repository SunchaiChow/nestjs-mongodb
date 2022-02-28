import { Shop } from './interface/shop.interface';
import { ShopService } from './shop.service';
import { Response } from 'express';
export declare class ShopController {
    private readonly shopService;
    constructor(shopService: ShopService);
    findAll(): Promise<(Shop & {
        _id: any;
    })[]>;
    findByTitle(params: any): Promise<(Shop & {
        _id: any;
    })[]>;
    findTwoParams(params: any): void;
    createShop(shop: Shop, res: Response): Promise<void>;
    updateInfo(body: any, res: Response): Promise<void>;
    deleteShopById(body: any, res: Response): Promise<void>;
}
