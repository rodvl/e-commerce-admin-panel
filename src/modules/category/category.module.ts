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
import { GetProductByCategoryUseCase } from 'src/useCase/product/getProductByCategory.use-case';
import { ProductRepository } from 'src/domain/repository/product.repository';
import { Product } from 'src/domain/entity/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [
    GetCategoriesUseCase,
    CreateCategoryUseCase,
    UpdateCategoryUseCase,
    DeleteCategoryUseCase,
    GetCategoryByIdCategoryUseCase,
    GetProductByCategoryUseCase,
    {
      provide: CategoryRepository,
      useFactory: (dataSource: DataSource) =>
        new CategoryRepository(dataSource.getRepository(Category)),
      inject: [getDataSourceToken()],
    },
    {
      provide: ProductRepository,
      useFactory: (dataSource: DataSource) =>
        new ProductRepository(dataSource.getRepository(Product)),
      inject: [getDataSourceToken()],
    },
  ],
})
export class CategoryModule {}
