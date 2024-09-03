import { Category } from 'src/domain/entity/category.entity';
import { UpdateProductUseCase } from './updateProduct.use-case';

describe('update Category Use Case', () => {
  const mockReturn: Category = { id: 'abc1', name: 'abc' };

  const ProductRepositoryStub = jest.fn().mockImplementation(() => ({
    save: jest.fn(),
  }));

  const GetProductByIdStub = jest.fn().mockImplementation(() => ({
    execute: jest.fn(),
  }));

  it('success update category', async () => {
    const productRepository = new ProductRepositoryStub();
    const getProductByIdStub = new GetProductByIdStub();
    const createCategoryUseCase = new UpdateProductUseCase(
      getProductByIdStub,
      productRepository,
    );

    jest.spyOn(getProductByIdStub, 'execute').mockResolvedValueOnce(mockReturn);

    await createCategoryUseCase.execute(mockReturn);

    expect(productRepository.save).toHaveBeenCalledWith(mockReturn);
  });
});
