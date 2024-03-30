import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateCategoryPayloadDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
