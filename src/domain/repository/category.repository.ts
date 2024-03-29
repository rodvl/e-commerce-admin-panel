import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entity/category.entity';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(Category)
    private usersRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.usersRepository.find();
  }
}
