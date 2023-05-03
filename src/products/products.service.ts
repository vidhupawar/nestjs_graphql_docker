import { Injectable, NotFoundException, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './products.model';
import { Model, Document, Types } from 'mongoose';
import { HttpService } from '@nestjs/axios';
import { v4 as uuidv4 } from 'uuid';
import { ProductDocument } from './entities/product.entity';

@Injectable()
export class ProductsService {
  products: Product[] = [];
  stationData: any;

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
    private readonly httpService: HttpService
  ) { }

  /*getStationData
  to fetch data from open charge api
  */
  async getStationData() {
    try {
      this.httpService.get('https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=1?key=ff82541f-c8d1-4507-be67-bd07e3259c4e')
        .subscribe(res => {
          this.stationData = res;
        });
      return;
    } catch (err) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  /*insertProducts
  @productData - data from open charge api
  to insert records in mongodb
  */
  async insertProducts(productData) {
    try {
      await this.productModel.insertMany(productData);
    } catch (err) {
      throw new BadRequestException('Error', { cause: new Error(), description: 'Some error description' })

    }
  }

  /*getProductById
 @prodId - product ID 
 to fetch data based on product id
 */
  async getProductById(prodId) {
    try {
      let prodData = await this.productModel.findOne({ ID: prodId }).exec();
      return prodData;
    }
    catch (err) {
      throw new NotFoundException(`No product found of Id-${prodId}`);
    }
  }

  /*updateProduct
  @prodId - product ID 
  @productData - updated data
  first check if the data is already in database if yes then update same
  if no create a new one
  */
  async updateProduct(prodId, productData: any) {
    let existingProduct: any;
    await this.getProductById(prodId)
      .then(res => {
        existingProduct = res;
      });
    if (existingProduct && existingProduct.length) {
      await this.productModel.findOneAndUpdate({ ID: prodId }, productData, { new: true }).exec();
    } else {
      await this.insertProducts(productData);
    }

  }


  /*getProducts
  get all records from the database
  */
  async getProducts() {
    const users = await this.productModel.find().exec();
    return users;
  }


  /*findAll
fetch records based on limit for pagination
*/
  async findAll(
    limit: number,
    offset: number,
    query = '',
  ): Promise<
    [
      prods: (Product &
        Document<any, any, any> & {
          _id: any;
        })[],
      count: number,
    ]
  > {
    const count = await this.productModel.count();
    let prods;
    await this.productModel
      .find()
      .skip(offset)
      .limit(limit)

      .exec()
      .then(res => {
        prods = res;
      });
    return [prods, count];
  }
}
