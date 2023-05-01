import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './products.model';
import { Model } from 'mongoose';
import { HttpService} from '@nestjs/axios';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductsService {
    products: Product[] = [];
    stationData : any;

    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>,
        private readonly httpService: HttpService
    ){}

    async getStationData() {
        this.httpService.get('https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=1?key=ff82541f-c8d1-4507-be67-bd07e3259c4e')
        .subscribe(res => {
            this.stationData = res;
            console.log('stationData', this.stationData)
        });
        return;
    }

    async insertProducts(productData) {
        const newProduct = new this.productModel(productData );
        const product = await newProduct.save();
        return product.id;
    }

    async getProductById(prodId){
        try{
            let prodData = await this.productModel.find( { ID: prodId }).exec();
            return prodData;
        }
        catch (err) {
            throw new NotFoundException(`Not found product of Id-${prodId}`);
        }  
    }

    async updateProduct(prodId, productData: any) {
        let existingProduct: any;
        await this.getProductById(prodId)
        .then(res => {
            existingProduct = res;
        });
        if(existingProduct && existingProduct.length) {
            await this.productModel.findOneAndUpdate({ID: prodId}, productData, { new: true }).exec();
        } else {
            await this.insertProducts(productData);
        }
       
    }
}
