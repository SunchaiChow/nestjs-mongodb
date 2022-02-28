"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    category: String,
    name: String,
    description: String,
    imgPath: String,
});
//# sourceMappingURL=product.schema.js.map