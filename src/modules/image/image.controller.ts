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

@Controller('image')
@ApiTags('Image')
export class ImageController {
  constructor(
    private readonly uploadImageUseCase: UploadImageUseCase,
    private readonly getImageContentUseCase: GetImageContentUseCase,
    private readonly updateImageUseCase: UpdateImageUseCase,
  ) {}

  @Get(':id')
  @Header('Content-Type', 'image/jpeg')
  @Header('Content-Disposition', 'attachment; filename="image.jpeg"')
  async getFile(@Param('id', new ParseUUIDPipe()) id: string) {
    const file = await this.getImageContentUseCase.execute(id);
    return new StreamableFile(file);
  }

  @Post()
  @UseInterceptors(FileInterceptor('content'))
  upload(@UploadedFile() content: Express.Multer.File) {
    return this.uploadImageUseCase.execute(content.buffer);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('content'))
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @UploadedFile() content: Express.Multer.File,
  ) {
    return this.updateImageUseCase.execute(id, content.buffer);
  }
}
