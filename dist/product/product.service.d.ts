import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interface/product.interface';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    create(productDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<(Product & {
        _id: any;
    })[]>;
    findByCategory(category: any): Promise<(Product & {
        _id: any;
    })[]>;
    findByName(name: any): Promise<(Product & {
        _id: any;
    })[]>;
    updateProduct(body: any): Promise<import("mongodb").UpdateResult>;
    deleteById(id: any): Promise<import("mongodb").DeleteResult>;
}
