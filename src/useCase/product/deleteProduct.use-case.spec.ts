import { DeleteProductUseCase } from './deleteProduct.use-case';

describe('delete Category Use Case', () => {
  const id = 'idddd';
  const mockCategory = {
    id: 'abc',
    name: '123',
  };

  const CategoryRepositoryStub = jest.fn().mockImplementation(() => ({
    delete: jest.fn(),
  }));

  const GetCategoryByIdCategoryUseCaseStub = jest
    .fn()
    .mockImplementation(() => ({
      execute: jest.fn(),
    }));

  it('success delete category', async () => {
    const categoryRepositoryStub = new CategoryRepositoryStub();
    const getCategoryByIdCategoryUseCaseStub =
      new GetCategoryByIdCategoryUseCaseStub();

    const createCategoryUseCase = new DeleteProductUseCase(
      getCategoryByIdCategoryUseCaseStub,
      categoryRepositoryStub,
    );

    jest
      .spyOn(getCategoryByIdCategoryUseCaseStub, 'execute')
      .mockResolvedValueOnce(mockCategory);

    await createCategoryUseCase.execute(id);

    expect(categoryRepositoryStub.delete).toHaveBeenCalledWith(id);
  });
});
