import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryPayloadDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
