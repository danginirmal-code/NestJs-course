import { Controller,Get,Param, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service.js';
import { AuthGuard } from '../guards/auth/auth.guard.js';
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    // @UseGuards(AuthGuard)
    getProducts(){
       return this.productService.getAllProduct()
    }
    @Post()
    create(){
    return this.productService.createProduct()
    }
    
}

