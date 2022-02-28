import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Product } from './interface/product.interface';
import { ProductService } from './product.service';
import { Response } from 'express';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService){};
    
    @Post()
    createProduct(@Body() product: Product , @Res() res: Response){
        return this.productService.create(product).then(() => {
            res.send(HttpStatus.CREATED);
        });
    }

    @Get()
    findAll(){
        return this.productService.findAll();
    }

    @Get('category/:category')
    findByCategory(@Param() params){
        return this.productService.findByCategory(params.category);
    }

    @Get('name/:name')
    findByName(@Param() params){
        return this.productService.findByName(params.name);
    }

    @Post('update')
    updateProduct(@Body() body , @Res() res: Response){
        return this.productService.updateProduct(body)
        .then(() => {
            res.send(HttpStatus.OK);
        });
    }

    @Post('delete')
    deleteProductById(@Body() body , @Res() res: Response){
        return this.productService.deleteById(body._id)
        .then(() => {
            res.send(HttpStatus.OK);
        });
    }

}
