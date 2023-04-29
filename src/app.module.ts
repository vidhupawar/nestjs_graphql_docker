import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';


import { StationsModule } from './stations/stations.module';

@Module({
  imports: [
    StationsModule,
    GraphQLModule.forRoot({
      autoSchemaFile:true,
      driver: ApolloDriver,
    }),
    MongooseModule.forRoot('mongodb+srv://vidhupawar:vidhu123@cluster1.dnffxib.mongodb.net/nestjs-demo?retryWrites=true&w=majority'),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
