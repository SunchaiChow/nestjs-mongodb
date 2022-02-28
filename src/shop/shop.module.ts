import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopSchema } from './schemas/shop.schema';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'shops', schema: ShopSchema}])],
  controllers: [ShopController],
  providers: [ShopService]
})
export class ShopModule {}
