import { Module } from '@nestjs/common';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Product } from 'src/domain/entity/product.entity';
import { ProductController } from './product.controller';
import { GetProductByIdUseCase } from 'src/useCase/product/getProductByid.use-case';
import { CreateProductUseCase } from 'src/useCase/product/createProduct.use-case';
import { DeleteProductUseCase } from 'src/useCase/product/deleteProduct.use-case';
import { GetProductUseCase } from 'src/useCase/product/getProduct.use-case';
import { UpdateProductUseCase } from 'src/useCase/product/updateProduct.use-case';
import { ProductRepository } from 'src/domain/repository/product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [
    GetProductUseCase,
    CreateProductUseCase,
    UpdateProductUseCase,
    DeleteProductUseCase,
    GetProductByIdUseCase,
    {
      provide: ProductRepository,
      useFactory: (dataSource: DataSource) =>
        new ProductRepository(dataSource.getRepository(Product)),
      inject: [getDataSourceToken()],
    },
  ],
})
export class ProductModule {}
