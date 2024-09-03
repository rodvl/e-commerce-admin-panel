import { Category } from 'src/domain/entity/category.entity';
import { CreateCategoryUseCase } from './createCategory.use-case';

describe('Create Category Use Case', () => {
  const params = { name: 'abc' };
  const mockReturn: Category = { id: 'abc1', name: 'abc' };

  const CategoryRepositoryStub = jest.fn().mockImplementation(() => ({
    save: jest.fn(),
  }));

  it('success create category', async () => {
    const categoryRepositoryStub = new CategoryRepositoryStub();
    const createCategoryUseCase = new CreateCategoryUseCase(
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
