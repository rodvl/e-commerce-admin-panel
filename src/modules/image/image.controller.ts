import {
  Controller,
  Get,
  Header,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadImageUseCase } from 'src/useCase/image/uploadImage.use-case';
import { GetImageContentUseCase } from 'src/useCase/image/getImageContent.use-case';
import { UpdateImageUseCase } from 'src/useCase/image/updateImage.use-case';
import { ImageE } from 'src/domain/entity/image.entity';

@Controller('image')
@ApiTags('Image')
export class ImageController {
  constructor(
    private readonly uploadImageUseCase: UploadImageUseCase,
    private readonly getImageContentUseCase: GetImageContentUseCase,
    private readonly updateImageUseCase: UpdateImageUseCase,
  ) {}

  @Get('/content/:id')
  @Header('Content-Type', 'image/jpeg')
  @Header('Content-Disposition', 'attachment; filename="image.jpeg"')
  async getFileContent(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<StreamableFile> {
    const file = await this.getImageContentUseCase.execute(id);
    return new StreamableFile(file);
  }

  @Post()
  @UseInterceptors(FileInterceptor('content'))
  upload(@UploadedFile() content: Express.Multer.File): Promise<ImageE> {
    return this.uploadImageUseCase.execute(content.buffer);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('content'))
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @UploadedFile() content: Express.Multer.File,
  ): Promise<ImageE> {
    return this.updateImageUseCase.execute(id, content.buffer);
  }
}
