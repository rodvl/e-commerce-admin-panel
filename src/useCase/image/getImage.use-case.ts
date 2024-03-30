import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ImageE } from 'src/domain/entity/image.entity';
import { ImageRepository } from 'src/domain/repository/image.repository';
import DefaultErrorMessages from 'src/shared/enum/DefaultErrorMessages';
import Entities from 'src/shared/enum/Entities';

@Injectable()
export class GetImageUseCase {
  constructor(private readonly imageRepository: ImageRepository) {}

  async execute(data: string): Promise<ImageE> {
    const entity = await this.imageRepository.findById(data);
    if (!entity)
      throw new HttpException(
        DefaultErrorMessages.NOT_FOUND(Entities.IMAGE),
        HttpStatus.NOT_FOUND,
      );
    return entity;
  }
}
