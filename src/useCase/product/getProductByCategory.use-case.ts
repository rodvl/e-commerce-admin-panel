import { Injectable } from '@nestjs/common';
import { Product } from 'src/domain/entity/product.entity';
import { ProductRepository } from 'src/domain/repository/product.repository';

@Injectable()
export class GetProductByCategoryUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(categoryId: string): Promise<Product[]> {
    const data = await this.productRepository.findByCategoryId(categoryId);

    return data;
  }
}
