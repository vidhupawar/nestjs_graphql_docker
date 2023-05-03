import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GraphQLJSON, GraphQLJSONObject } from 'graphql-type-json';

export type ProductDocument = Product & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Product {
  @Field(() => String, { nullable: true })
  _id: string;

  @Field(() => String, { nullable: true })
  @Prop({ required: true, unique: true })
  ID!: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  OperatorInfo!: object;
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