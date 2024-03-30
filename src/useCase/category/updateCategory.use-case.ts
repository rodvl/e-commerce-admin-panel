import { Injectable } from '@nestjs/common';
import { UpdateCategoryPayloadDto } from 'src/modules/category/dto/updateCategoryPayload.dto';
import { Category } from 'src/domain/entity/category.entity';
import { CategoryRepository } from 'src/domain/repository/category.repository';
import { GetCategoryByIdCategoryUseCase } from './getCategoryByid.use-case';

@Injectable()
export class UpdateCategoryUseCase {
  constructor(
    private readonly getCategoryById: GetCategoryByIdCategoryUseCase,
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async execute(data: UpdateCategoryPayloadDto): Promise<Category> {
    const entity = await this.getCategoryById.execute(data.id);
    entity.name = data.name;
    return await this.categoryRepository.save(entity);
  }
}
