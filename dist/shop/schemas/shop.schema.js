"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopSchema = void 0;
const mongoose = require("mongoose");
exports.ShopSchema = new mongoose.Schema({
    title: String,
    description: String,
    imgPath: String,
    products: [{ category: String, name: String }],
});
//# sourceMappingURL=shop.schema.js.map