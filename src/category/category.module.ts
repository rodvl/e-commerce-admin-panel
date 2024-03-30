import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { Category } from 'src/domain/entity/category.entity';
import { CategoryRepository } from 'src/domain/repository/category.repository';
import { DataSource } from 'typeorm';
import { GetCategoriesUseCase } from 'src/useCase/category/getCategories.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [
    GetCategoriesUseCase,
    {
      provide: CategoryRepository,
      useFactory: (dataSource: DataSource) =>
        new CategoryRepository(dataSource.getRepository(Category)),
      inject: [getDataSourceToken()],
    },
  ],
})
export class CategoryModule {}
