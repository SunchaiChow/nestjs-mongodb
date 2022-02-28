import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { title } from 'process';
import { CreateShopDto } from './dto/create-shop.dto';
import { Shop } from './interface/shop.interface';

@Injectable()
export class ShopService {
    constructor(@InjectModel('shops') private readonly shopModel: Model<Shop>) {}

    async create(createShopDto: CreateShopDto): Promise<Shop> {
        const createdShop = new this.shopModel(createShopDto);
        return await createdShop.save();
    }

    async findAll(){
        return await this.shopModel.find({}).sort({title: 'asc'}).exec();
    }

    async findByTitle(title) {
        return await this.shopModel.find({title: title}).exec();
    }

    async updateView(id)
    {
        // const shopList = await this.shopModel.find({_id: id}).exec();
        // await this.shopModel.updateOne(
        //     { _id: id},
        //     {view: shopList[0].view + 1},
        //     { upsert: true },
        // ).exec();
    }

    async updateShop(body){
        await this.shopModel.updateOne(
                { _id: body._id},
                {name: body.name , description: body.description},
                { upsert: true},
        ).exec()
        .then(()=>{
            return "updated";
        });
    }

    async deleteById(id) {
        return await this.shopModel.deleteOne({_id: id}).exec();
    }

}
