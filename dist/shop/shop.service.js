"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ShopService = class ShopService {
    constructor(shopModel) {
        this.shopModel = shopModel;
    }
    async create(createShopDto) {
        const createdShop = new this.shopModel(createShopDto);
        return await createdShop.save();
    }
    async findAll() {
        return await this.shopModel.find({}).sort({ title: 'asc' }).exec();
    }
    async findByTitle(title) {
        return await this.shopModel.find({ title: title }).exec();
    }
    async updateView(id) {
    }
    async updateShop(body) {
        await this.shopModel.updateOne({ _id: body._id }, { name: body.name, description: body.description }, { upsert: true }).exec()
            .then(() => {
            return "updated";
        });
    }
    async deleteById(id) {
        return await this.shopModel.deleteOne({ _id: id }).exec();
    }
};
ShopService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('shops')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ShopService);
exports.ShopService = ShopService;
//# sourceMappingURL=shop.service.js.map