import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './schema/product.schema.js';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  async createProduct(): Promise<Product> {
    const product = new this.productModel({
      title: 'Gamming laptop',
      tags: [
        { name: 'Electronic' },
        { name: 'gamming' },
        { name: 'laptop' },
      ],
    });

    return product.save();
  }

  async getAllProduct(): Promise<Product[]> {
    return this.productModel.find();
  }
}