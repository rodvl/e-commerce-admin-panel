import { Injectable } from '@nestjs/common';
import { ImageE } from 'src/domain/entity/image.entity';
import { ImageRepository } from 'src/domain/repository/image.repository';
import { convertBufferToString } from 'src/shared/utils/converters';
import { GetImageUseCase } from './getImage.use-case';

@Injectable()
export class UpdateImageUseCase {
  constructor(
    private readonly getImageUseCase: GetImageUseCase,
    private readonly imageRepository: ImageRepository,
  ) {}

  async execute(id: string, data: Buffer): Promise<ImageE> {
    const entity = await this.getImageUseCase.execute(id);

    entity.content = convertBufferToString(data);
    return await this.imageRepository.save(entity);
  }
}
