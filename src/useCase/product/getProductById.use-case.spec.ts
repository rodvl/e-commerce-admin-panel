import { Category } from 'src/domain/entity/category.entity';
import { GetProductByIdUseCase } from './getProductByid.use-case';

describe('Get category by id Use Case', () => {
  const mockRepositoryReturn: Category = {
    id: 'abc',
    name: 'teste',
  };

  const ProductRepositoryStub = jest.fn().mockImplementation(() => ({
    findById: jest.fn(),
  }));

  it('success get category', async () => {
    const categoryRepositoryStub = new ProductRepositoryStub();
    const getCategoriesUseCase = new GetProductByIdUseCase(
      categoryRepositoryStub,
    );

    jest
      .spyOn(categoryRepositoryStub, 'findById')
      .mockResolvedValueOnce(mockRepositoryReturn);

    const data = await getCategoriesUseCase.execute('abc');

    expect(data).toEqual(mockRepositoryReturn);
    expect(categoryRepositoryStub.findById).toHaveBeenCalledWith('abc');
  });
});
