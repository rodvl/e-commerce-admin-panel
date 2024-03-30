import { Injectable } from '@nestjs/common';
import { GetImageUseCase } from './getImage.use-case';
import { convertStringToBuffer } from 'src/shared/utils/converters';

@Injectable()
export class GetImageContentUseCase {
  constructor(private readonly getImageUseCase: GetImageUseCase) {}

  async execute(data: string): Promise<Buffer> {
    const image = await this.getImageUseCase.execute(data);
    return convertStringToBuffer(image.content);
  }
}
