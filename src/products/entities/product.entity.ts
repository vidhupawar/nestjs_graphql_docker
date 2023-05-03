import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GraphQLJSON, GraphQLJSONObject } from 'graphql-type-json';

export type ProductDocument = Product & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Product {
 
  @Field(() => Number, { nullable: true })
  @Prop({ required: true, unique: true })
  ID!: number;

  @Field(() => GraphQLJSONObject, { nullable: true })
  OperatorInfo!: object;

  @Field(() => GraphQLJSONObject, { nullable: true })
  StatusType!: object;

  @Field(() => GraphQLJSONObject, { nullable: true })
  AddressInfo!: object;

  @Field(() => [GraphQLJSONObject], { nullable: true })
  Connections!: object;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.index(
  {
    ID: 1,
  },
  {
    unique: true,
  },
);