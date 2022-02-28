import * as mongoose from 'mongoose';

export const ShopSchema = new mongoose.Schema({
    title: String,
    description: String,
    imgPath: String,
    products: [{category: String , name: String}],
})