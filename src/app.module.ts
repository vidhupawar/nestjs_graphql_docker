import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { ProductsModule } from './products/products.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig  } from '@nestjs/apollo';



@Module({
  imports: [
    ProductsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      context: ({ req }) => ({ req }),
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule { }
