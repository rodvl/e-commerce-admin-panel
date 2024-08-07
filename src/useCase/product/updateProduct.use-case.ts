import { Injectable } from '@nestjs/common';
import { GetProductByIdUseCase } from './getProductByid.use-case';
import { Product } from 'src/domain/entity/product.entity';
import { ProductRepository } from 'src/domain/repository/product.repository';
import { UpdateProductPayloadDto } from 'src/modules/product/dto/updateProductPayload.dto';

@Injectable()
export class UpdateProductUseCase {
  constructor(
    private readonly getProductById: GetProductByIdUseCase,
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(data: UpdateProductPayloadDto): Promise<Product> {
    let entity = await this.getProductById.execute(data.id);
    entity = { ...entity, ...data, id: entity.id };
    return await this.productRepository.save(entity);
  }
}
