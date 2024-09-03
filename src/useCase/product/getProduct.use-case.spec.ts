import { Category } from 'src/domain/entity/category.entity';
import { GetProductUseCase } from './getProduct.use-case';

describe('Get categories Use Case', () => {
  const mockRepositoryReturn: Category[] = [
    {
      id: 'abc',
      name: 'teste',
    },
    {
      id: 'cba',
      name: 'teste2',
    },
  ];

  const CategoryRepositoryStub = jest.fn().mockImplementation(() => ({
    findAll: jest.fn(),
  }));

  it('success list category', async () => {
    const categoryRepositoryStub = new CategoryRepositoryStub();
    const getCategoriesUseCase = new GetProductUseCase(categoryRepositoryStub);

    jest
      .spyOn(categoryRepositoryStub, 'findAll')
      .mockResolvedValueOnce(mockRepositoryReturn);

    const data = await getCategoriesUseCase.execute();

    expect(data).toEqual(mockRepositoryReturn);
  });
});
