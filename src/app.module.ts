import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './shop/shop.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GlobalVariable } from './util/global-variable.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ShopModule,
    MongooseModule.forRoot(GlobalVariable.dbHost+'/shops'),
    ProductModule,
    MongooseModule.forRoot(GlobalVariable.dbHost+'/product'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
