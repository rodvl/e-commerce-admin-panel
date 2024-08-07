import { IsNumber, IsString, IsUUID } from 'class-validator';

export class UpdateProductPayloadDto {
  @IsUUID()
  id: string;

  @IsString()
  name?: string;

  @IsString()
  description?: string;

  @IsString()
  imageId?: string;

  @IsNumber()
  price?: number;

  @IsUUID()
  categoryId?: string;
}
