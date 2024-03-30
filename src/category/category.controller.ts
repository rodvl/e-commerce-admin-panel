import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Category } from 'src/domain/entity/category.entity';
import { ApiTags } from '@nestjs/swagger';
import { GetCategoriesUseCase } from 'src/useCase/category/getCategories.use-case';
import { CreateCategoryPayloadDto } from './dto/createCategoryPayload.dto';
import { CreateCategoryUseCase } from 'src/useCase/category/createCategory.use-case';
import { UpdateCategoryPayloadDto } from './dto/updateCategoryPayload.dto';
import { UpdateCategoryUseCase } from 'src/useCase/category/updateCategory.use-case';
import { DeleteCategoryUseCase } from 'src/useCase/category/deleteCategory.use-case';

@Controller('category')
@ApiTags('Category')
export class CategoryController {
  constructor(
    private readonly getCategoriesUseCase: GetCategoriesUseCase,
    private readonly createCategoryUseCase: CreateCategoryUseCase,
    private readonly updateCategoryUseCase: UpdateCategoryUseCase,
    private readonly deleteCategoryUseCase: DeleteCategoryUseCase,
  ) {}

  @Get()
  get(): Promise<Category[]> {
    return this.getCategoriesUseCase.execute();
  }

  @Post()
  create(@Body() body: CreateCategoryPayloadDto): Promise<Category> {
    return this.createCategoryUseCase.execute(body);
  }

  @Put()
  update(@Body() body: UpdateCategoryPayloadDto): Promise<Category> {
    return this.updateCategoryUseCase.execute(body);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    return this.deleteCategoryUseCase.execute(id);
  }
}
