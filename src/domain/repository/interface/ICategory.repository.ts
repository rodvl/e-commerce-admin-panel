import { Category } from 'src/domain/entity/category.entity';

export interface ICategoryRepository {
  findAll(): Promise<Category[]>;
}
