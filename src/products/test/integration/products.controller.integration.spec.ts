import { Test } from "@nestjs/testing"
import { Connection } from "mongoose"
import * as request from 'supertest';

import { productStub } from "../stubs/products.stub";

import { ProductsService } from '../../products.service';
import { ProductsModule } from "../../products.module";
import { ProductsController } from "../../products.controller";
import { Product } from '../../products.model';
import { Model, Document, Types  } from 'mongoose';

describe('ProductController', () => {
  let dbConnection: Connection;
  let httpServer: any;
  let app: any;
  let productsService: ProductsService;
  let productsController: ProductsController
  let productModel: Model<Product>

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ProductsModule],
      providers:[ProductsService]
    }).compile();
  
    app = moduleRef.createNestApplication();
    await app.init();
    dbConnection = new Connection();
    productsService = moduleRef.get<ProductsService>(ProductsService);
    httpServer = app.getHttpServer();
  })

  describe('callOpenChargeMapAPI ', () => {
    it('should return product', async () => {
      const response = await request(httpServer).get('https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=10?key=ff82541f-c8d1-4507-be67-bd07e3259c4e');
      expect(response.status).toBe(200);
      expect(response.body).toMatchObject([productStub()]);
    })
  })

  describe('getProductById ', () => {
    it('should return product by ID', async () => {
      await productModel.findOne({ID: 263706})
      .then(response => {
        expect(response).toMatchObject(productStub());
      })
    })
  }) 
  describe('getProducts ', () => {
    it('should return all products', async () => {
      await productModel.find()
      .then(response => {
        expect(response).toMatchObject([productStub()]);
      })
    })
  }) 
})
