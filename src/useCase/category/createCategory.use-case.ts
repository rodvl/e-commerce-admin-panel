import { Injectable } from '@nestjs/common';
import { CreateCategoryPayloadDto } from 'src/modules/category/dto/createCategoryPayload.dto';
import { Category } from 'src/domain/entity/category.entity';
import { CategoryRepository } from 'src/domain/repository/category.repository';

@Injectable()
export class CreateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(data: CreateCategoryPayloadDto): Promise<Category> {
    const entity = new Category();
    entity.name = data.name;
    return await this.categoryRepository.save(entity);
  }
}
