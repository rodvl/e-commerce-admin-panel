import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { Category } from 'src/domain/entity/category.entity';
import { CategoryRepository } from 'src/domain/repository/category.repository';
import { DataSource } from 'typeorm';
import { GetCategoriesUseCase } from 'src/useCase/category/getCategories.use-case';
import { CreateCategoryUseCase } from 'src/useCase/category/createCategory.use-case';
import { UpdateCategoryUseCase } from 'src/useCase/category/updateCategory.use-case';
import { DeleteCategoryUseCase } from 'src/useCase/category/deleteCategory.use-case';
import { GetCategoryByIdCategoryUseCase } from 'src/useCase/category/getCategoryByid.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [
    GetCategoriesUseCase,
    CreateCategoryUseCase,
    UpdateCategoryUseCase,
    DeleteCategoryUseCase,
    GetCategoryByIdCategoryUseCase,
    {
      provide: CategoryRepository,
      useFactory: (dataSource: DataSource) =>
        new CategoryRepository(dataSource.getRepository(Category)),
      inject: [getDataSourceToken()],
    },
  ],
})
export class CategoryModule {}
