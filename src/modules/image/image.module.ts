import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ImageE } from 'src/domain/entity/image.entity';
import { ImageRepository } from 'src/domain/repository/image.repository';
import { UploadImageUseCase } from 'src/useCase/image/uploadImage.use-case';
import { GetImageUseCase } from 'src/useCase/image/getImage.use-case';
import { GetImageContentUseCase } from 'src/useCase/image/getImageContent.use-case';
import { UpdateImageUseCase } from 'src/useCase/image/updateImage.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([ImageE])],
  controllers: [ImageController],
  providers: [
    UploadImageUseCase,
    GetImageUseCase,
    GetImageContentUseCase,
    UpdateImageUseCase,
    {
      provide: ImageRepository,
      useFactory: (dataSource: DataSource) =>
        new ImageRepository(dataSource.getRepository(ImageE)),
      inject: [getDataSourceToken()],
    },
  ],
})
export class ImageModule {}
