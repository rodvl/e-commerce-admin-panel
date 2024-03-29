import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { Category } from 'src/domain/entity/category.entity';
import { CategoryRepository } from 'src/domain/repository/category.repository';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [
    CategoryService,
    {
      provide: CategoryRepository,
      useFactory: (dataSource: DataSource) =>
        new CategoryRepository(dataSource.getRepository(Category)),
      inject: [getDataSourceToken()],
    },
  ],
})
export class CategoryModule {}
