import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from 'src/domain/entity/product.entity';
import { ProductRepository } from 'src/domain/repository/product.repository';
import DefaultErrorMessages from 'src/shared/enum/DefaultErrorMessages';
import Entities from 'src/shared/enum/Entities';

@Injectable()
export class GetProductByIdUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(data: string): Promise<Product> {
    const entity = await this.productRepository.findById(data);
    if (!entity)
      throw new HttpException(
        DefaultErrorMessages.NOT_FOUND(Entities.CATEGORY),
        HttpStatus.NOT_FOUND,
      );
    return entity;
  }
}
