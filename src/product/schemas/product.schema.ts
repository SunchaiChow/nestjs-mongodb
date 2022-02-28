import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    category: String,
    name: String,
    description: String,
    imgPath: String,
})