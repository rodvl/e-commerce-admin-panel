import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Category } from 'src/domain/entity/category.entity';
import { CategoryRepository } from 'src/domain/repository/category.repository';
import DefaultErrorMessages from 'src/shared/enum/DefaultErrorMessages';
import Entities from 'src/shared/enum/Entities';

@Injectable()
export class GetCategoryByIdCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(data: string): Promise<Category> {
    const entity = await this.categoryRepository.findById(data);
    if (!entity)
      throw new HttpException(
        DefaultErrorMessages.NOT_FOUND(Entities.CATEGORY),
        HttpStatus.NOT_FOUND,
      );
    return entity;
  }
}
