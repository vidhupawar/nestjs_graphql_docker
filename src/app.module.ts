import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { ProductsModule } from './products/products.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';


@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb+srv://vidhupawar:vidhu123@cluster1.dnffxib.mongodb.net/nestjs-demo?retryWrites=true&w=majority'),
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule { }
