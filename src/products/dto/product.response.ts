import { ObjectType } from '@nestjs/graphql';
import relayTypes from './relay.types';
import { Product } from '../entities/product.entity';

@ObjectType()
export default class ProductResponse extends relayTypes<Product>(Product) {}