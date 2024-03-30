import { ImageE } from 'src/domain/entity/image.entity';

export interface IImageRepository {
  save(data: ImageE): Promise<ImageE>;
}
