import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CategoryRepository } from 'src/domain/repository/category.repository';
import { GetCategoryByIdCategoryUseCase } from './getCategoryByid.use-case';
import { GetProductByCategoryUseCase } from '../product/getProductByCategory.use-case';
import DefaultErrorMessages from 'src/shared/enum/DefaultErrorMessages';

@Injectable()
export class DeleteCategoryUseCase {
  constructor(
    private readonly getCategoryById: GetCategoryByIdCategoryUseCase,
    private readonly getProductByCategoryUseCase: GetProductByCategoryUseCase,
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async execute(data: string): Promise<void> {
    const getCategoryPromise = this.getCategoryById.execute(data);
    const getProductByCategoryPromise =
      this.getProductByCategoryUseCase.execute(data);

    const [products] = await Promise.all([
      getProductByCategoryPromise,
      getCategoryPromise,
    ]);

    if (products.length > 0) {
      throw new HttpException(
        DefaultErrorMessages.UNABLE_TO_PERFORM('delete-category'),
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.categoryRepository.delete(data);
  }
}
