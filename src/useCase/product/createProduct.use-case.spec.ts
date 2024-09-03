import { CreateProductUseCase } from './createProduct.use-case';

describe('Create Category Use Case', () => {
  const params = {
    name: 'abc',
    description: 'lalala',
    imageId: 'aaaa',
    price: 20,
    categoryId: 'bbb',
  };
  const mockReturn = {
    id: 'abc1',
    name: 'abc',
    description: 'lalala',
    imageId: 'aaaa',
    price: 20,
    categoryId: 'bbb',
  };

  const CategoryRepositoryStub = jest.fn().mockImplementation(() => ({
    save: jest.fn(),
  }));

  it('success create category', async () => {
    const categoryRepositoryStub = new CategoryRepositoryStub();
    const createCategoryUseCase = new CreateProductUseCase(
      categoryRepositoryStub,
    );

    jest
      .spyOn(categoryRepositoryStub, 'save')
      .mockResolvedValueOnce(mockReturn);

    const data = await createCategoryUseCase.execute(params);

    expect(data).toEqual(mockReturn);
    expect(categoryRepositoryStub.save).toHaveBeenCalledWith(params);
  });
});
