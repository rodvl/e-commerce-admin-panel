import { Injectable } from '@nestjs/common';
import { ProductRepository } from 'src/domain/repository/product.repository';
import { Product } from 'src/domain/entity/product.entity';
import { CreateProductPayloadDto } from 'src/modules/product/dto/createProductPayload.dto';

@Injectable()
export class CreateProductUseCase {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(data: CreateProductPayloadDto): Promise<Product> {
    const entity = new Product();
    entity.categoryId = data.categoryId;
    entity.description = data.description;
    entity.imageId = data.imageId;
    entity.name = data.name;
    entity.price = data.price;

    return await this.productRepository.save(entity);
  }
}
