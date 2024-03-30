import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entity/category.entity';
import { ICategoryRepository } from './interface/ICategory.repository';

@Injectable()
export class CategoryRepository implements ICategoryRepository {
  constructor(
    @InjectRepository(Category)
    private usersRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.usersRepository.find();
  }
}
