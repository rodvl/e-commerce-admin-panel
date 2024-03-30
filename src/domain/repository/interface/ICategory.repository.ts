import { Category } from 'src/domain/entity/category.entity';

export interface ICategoryRepository {
  findAll(): Promise<Category[]>;
  save(data: Category): Promise<Category>;
  findById(id: string): Promise<Category>;
}
