import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from 'src/domain/entity/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getHello(): Promise<Category[]> {
    return this.categoryService.getCategories();
  }
}
