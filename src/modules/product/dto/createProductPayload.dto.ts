import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProductPayloadDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  imageId: string;

  @IsString()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  categoryId: string;
}
