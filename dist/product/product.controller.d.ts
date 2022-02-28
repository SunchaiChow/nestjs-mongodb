import { Product } from './interface/product.interface';
import { ProductService } from './product.service';
import { Response } from 'express';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(product: Product, res: Response): Promise<void>;
    findAll(): Promise<(Product & {
        _id: any;
    })[]>;
    findByCategory(params: any): Promise<(Product & {
        _id: any;
    })[]>;
    findByName(params: any): Promise<(Product & {
        _id: any;
    })[]>;
    updateProduct(body: any, res: Response): Promise<void>;
    deleteProductById(body: any, res: Response): Promise<void>;
}
