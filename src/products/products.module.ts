import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductResolver } from './products.resolver'
import { ProductSchema } from './products.model';
import { HttpModule} from '@nestjs/axios';


@Module({
    imports: [MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}]),
    HttpModule],
    controllers: [ProductsController],
    providers: [ProductsService, ProductResolver],
})
export class ProductsModule {}
