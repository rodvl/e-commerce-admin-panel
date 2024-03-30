import { Injectable } from '@nestjs/common';
import { ImageE } from 'src/domain/entity/image.entity';
import { ImageRepository } from 'src/domain/repository/image.repository';
import { convertBufferToString } from 'src/shared/utils/converters';

@Injectable()
export class UploadImageUseCase {
  constructor(private readonly imageRepository: ImageRepository) {}

  async execute(data: Buffer): Promise<ImageE> {
    const entity = new ImageE();

    entity.content = convertBufferToString(data);
    return await this.imageRepository.save(entity);
  }
}
