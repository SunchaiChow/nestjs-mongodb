import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Shop } from './interface/shop.interface';
import { ShopService } from './shop.service';
import { Response } from 'express';

@Controller('shop')
export class ShopController {

    constructor(private readonly shopService: ShopService){}

    @Get()
    findAll(){
        return this.shopService.findAll();
    }

    @Get(':title')
    findByTitle(@Param() params){
        return this.shopService.findByTitle(params.title);
    }

    @Get(':title/:test')
    findTwoParams(@Param() params){
        console.log("Params1: "+params.title);
        console.log("Params2: "+params.test);
    }

    @Post()
    createShop(@Body() shop: Shop , @Res() res: Response){
        console.log('Post Create');
        return this.shopService.create(shop)
        .then(()=>{
            console.log('Complete');
            // return this.shopService.findByTitle(shop.title);
            // res.status(HttpStatus.CREATED).send(shop);
            res.send(HttpStatus.CREATED);
            // res.redirect('https://localhost:3001');
            // res.status(HttpStatus.CREATED).json(['completed']);
        });
    }

    @Post('update')
    updateInfo(@Body() body , @Res() res: Response){
        // console.log("update");
        return this.shopService.updateShop(body).then(() => {
            res.send(HttpStatus.OK);
        });
    }

    @Post('delete')
    deleteShopById(@Body() body , @Res() res: Response){
        console.log("delete");
        return this.shopService.deleteById(body._id).then(() => {
            res.send(HttpStatus.OK);
        });
    }
}
