import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from 'src/domain/entity/category.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getHello(): Promise<Category[]> {
    return this.categoryService.getCategories();
  }
}
