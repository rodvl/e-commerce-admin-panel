import { Product } from 'src/domain/entity/product.entity';

export interface IProductRepository {
  findAll(): Promise<Product[]>;
  save(data: Product): Promise<Product>;
  findById(id: string): Promise<Product>;
}
