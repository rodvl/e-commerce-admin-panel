import { Injectable } from '@nestjs/common';
import { CategoryRepository } from 'src/domain/repository/category.repository';
import { GetCategoryByIdCategoryUseCase } from './getCategoryByid.use-case';

@Injectable()
export class DeleteCategoryUseCase {
  constructor(
    private readonly getCategoryById: GetCategoryByIdCategoryUseCase,
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async execute(data: string): Promise<void> {
    await this.getCategoryById.execute(data);
    await this.categoryRepository.delete(data);
  }
}
