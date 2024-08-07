import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { IProductRepository } from './interface/IProduct.repository';
import { Product } from '../entity/product.entity';

@Injectable()
export class ProductRepository implements IProductRepository {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findById(id: string): Promise<Product> {
    return await this.productRepository.findOne({ where: { id } });
  }

  async save(data: Product): Promise<Product> {
    return await this.productRepository.save(data);
  }
  async delete(id: string): Promise<DeleteResult> {
    return await this.productRepository.delete({ id });
  }
}
