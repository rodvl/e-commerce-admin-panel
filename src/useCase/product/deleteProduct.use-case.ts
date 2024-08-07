import { Injectable } from '@nestjs/common';
import { GetProductByIdUseCase } from './getProductByid.use-case';
import { ProductRepository } from 'src/domain/repository/product.repository';

@Injectable()
export class DeleteProductUseCase {
  constructor(
    private readonly getProductByIdUseCase: GetProductByIdUseCase,
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(data: string): Promise<void> {
    await this.getProductByIdUseCase.execute(data);
    await this.productRepository.delete(data);
  }
}
