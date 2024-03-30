import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IImageRepository } from './interface/IImage.repository';
import { ImageE } from '../entity/image.entity';

@Injectable()
export class ImageRepository implements IImageRepository {
  constructor(
    @InjectRepository(ImageE)
    private categoryRepository: Repository<ImageE>,
  ) {}

  async findById(id: string): Promise<ImageE> {
    return await this.categoryRepository.findOne({ where: { id } });
  }

  async save(data: ImageE): Promise<ImageE> {
    return await this.categoryRepository.save(data);
  }
}
