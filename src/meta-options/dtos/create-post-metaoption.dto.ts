import { IsJSON, IsNotEmpty } from 'class-validator';

export class CreatePostMetaoptionsDto {
  @IsNotEmpty()
  @IsJSON()
  metavalue: string;
}
