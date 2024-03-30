import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Category } from '../entity/category.entity';
import { ICategoryRepository } from './interface/ICategory.repository';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async findById(id: string): Promise<Category> {
    return await this.categoryRepository.findOne({ where: { id } });
  }

  async save(data: Category): Promise<Category> {
    return await this.categoryRepository.save(data);
  }
  async delete(id: string): Promise<DeleteResult> {
    return await this.categoryRepository.delete({ id });
  }
}
