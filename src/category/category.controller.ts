import { Controller, Get } from '@nestjs/common';
import { Category } from 'src/domain/entity/category.entity';
import { ApiTags } from '@nestjs/swagger';
import { GetCategoriesUseCase } from 'src/useCase/category/getCategories.use-case';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
  constructor(private readonly getCategoriesUseCase: GetCategoriesUseCase) {}

  @Get()
  get(): Promise<Category[]> {
    return this.getCategoriesUseCase.execute();
  }
}
