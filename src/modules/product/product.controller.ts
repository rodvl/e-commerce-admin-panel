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
import { ApiTags } from '@nestjs/swagger';
import { CreateProductPayloadDto } from './dto/createProductPayload.dto';
import { Product } from 'src/domain/entity/product.entity';
import { UpdateProductPayloadDto } from './dto/updateProductPayload.dto';
import { CreateProductUseCase } from 'src/useCase/product/createProduct.use-case';
import { GetProductUseCase } from 'src/useCase/product/getProduct.use-case';
import { UpdateProductUseCase } from 'src/useCase/product/updateProduct.use-case';
import { DeleteProductUseCase } from 'src/useCase/product/deleteProduct.use-case';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(
    private readonly getProductUseCase: GetProductUseCase,
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase,
    private readonly deleteProductUseCase: DeleteProductUseCase,
  ) {}

  @Get()
  get(): Promise<Product[]> {
    return this.getProductUseCase.execute();
  }

  @Post()
  create(@Body() body: CreateProductPayloadDto): Promise<Product> {
    return this.createProductUseCase.execute(body);
  }

  @Put()
  update(@Body() body: UpdateProductPayloadDto): Promise<Product> {
    return this.updateProductUseCase.execute(body);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    return this.deleteProductUseCase.execute(id);
  }
}
