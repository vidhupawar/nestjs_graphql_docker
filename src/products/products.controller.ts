import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) { }

    @Post()
    async addProducts(
        @Body() productData: Object
    ) {
        await this.productService.insertProducts(
            productData
        );
    }

    @Get()
    async getProductData() {
        return await this.productService.getStationData();
    }

    @Get(':id')
    async getProductById(
        @Param('id') prodId: number
    ) {
        return await this.productService.getProductById(prodId);
    }

    @Post(':id')
    async updateProduct(
        @Param('id') prodId: number,
        @Body() productData: Object
    ) {
        await this.productService.updateProduct(prodId, productData);
        return `${prodId} updated;`
    }
}
