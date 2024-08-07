import { Injectable } from '@nestjs/common';
import { Product } from 'src/domain/entity/product.entity';
import { ProductRepository } from 'src/domain/repository/product.repository';

@Injectable()
export class GetProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }
}
