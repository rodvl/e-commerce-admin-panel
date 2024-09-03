import { Category } from 'src/domain/entity/category.entity';
import { UpdateCategoryUseCase } from './updateCategory.use-case';

describe('update Category Use Case', () => {
  const mockReturn: Category = { id: 'abc1', name: 'abc' };

  const CategoryRepositoryStub = jest.fn().mockImplementation(() => ({
    save: jest.fn(),
  }));

  const GetCategoryByIdCategoryUseCaseStub = jest
    .fn()
    .mockImplementation(() => ({
      execute: jest.fn(),
    }));

  it('success update category', async () => {
    const categoryRepositoryStub = new CategoryRepositoryStub();
    const getCategoryByIdCategoryUseCaseStub =
      new GetCategoryByIdCategoryUseCaseStub();
    const createCategoryUseCase = new UpdateCategoryUseCase(
      getCategoryByIdCategoryUseCaseStub,
      categoryRepositoryStub,
    );

    jest
      .spyOn(getCategoryByIdCategoryUseCaseStub, 'execute')
      .mockResolvedValueOnce(mockReturn);

    await createCategoryUseCase.execute(mockReturn);

    expect(categoryRepositoryStub.save).toHaveBeenCalledWith(mockReturn);
  });
});
