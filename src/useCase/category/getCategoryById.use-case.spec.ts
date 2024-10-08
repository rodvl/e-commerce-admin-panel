import { Category } from 'src/domain/entity/category.entity';
import { GetCategoryByIdCategoryUseCase } from './getCategoryByid.use-case';

describe('Get category by id Use Case', () => {
  const mockRepositoryReturn: Category = {
    id: 'abc',
    name: 'teste',
  };

  const CategoryRepositoryStub = jest.fn().mockImplementation(() => ({
    findById: jest.fn(),
  }));

  it('success get category', async () => {
    const categoryRepositoryStub = new CategoryRepositoryStub();
    const getCategoriesUseCase = new GetCategoryByIdCategoryUseCase(
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
