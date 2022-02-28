import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './interface/product.interface';

@Injectable()
export class ProductService {
    constructor(@InjectModel('products') private readonly productModel: Model<Product>){}

    async create(productDto: CreateProductDto): Promise<Product>{
        const createdProduct = new this.productModel(productDto);
        return createdProduct.save();
    }

    async findAll(){
        return this.productModel.find({}).exec();
    }

    async findByCategory(category){
        return this.productModel.find({category: category}).exec();
    }

    async findByName(name){
        return this.productModel.find({name: name}).exec();
    }

    async updateProduct(body){
        return await this.productModel.updateOne(
            { _id: body._id},
            {   name: body.name ,
                category: body.category,
                imgPath: body.imgPath,
            },
            {upsert: true},
        );
    }

    async deleteById(id){
        return await this.productModel.deleteOne({_id: id}).exec();
    }
}
