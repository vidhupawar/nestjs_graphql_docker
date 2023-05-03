import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Inject, NotFoundException } from '@nestjs/common';

import { Product, ProductModel } from './products.model';
import { ProductsService } from './products.service';
import ProductResponse from './dto/product.response';
import ConnectionArgs, {
  getPagingParameters,
} from './dto/connection.args';

import { connectionFromArraySlice } from 'graphql-relay';

@Resolver('Product')
export class ProductResolver {
  constructor(@Inject(ProductsService) private productService: ProductsService) { }

  @Query(() => ProductModel)
  async getProductById(@Args('id') id: number) {
    let productData: any;
    await this.productService.getProductById(id)
      .then(res => {
        if (res) {
          productData = res;

        } else {
          throw new NotFoundException(`No product found of Id-${id}`);
        }
      });
    return productData;
  }

  @Query(returns => [ProductModel])
  async getAllProducts() {
    let productData: any;
    await this.productService.getProducts()
      .then(res => { productData = res });
    return productData;
  }

  @Query(() => ProductResponse, { name: 'ProductList' })
  async getProductList(
    @Args() args: ConnectionArgs,
    @Args('query', { nullable: true }) query?: string,
  ): Promise<ProductResponse> {
    const { limit, offset } = getPagingParameters(args);
    const [products, count] = await this.productService.findAll(
      limit,
      offset,
      query,
    );
    return connectionFromArraySlice(products, args, {
      arrayLength: count,
      sliceStart: offset || 0,
    });

  }
}