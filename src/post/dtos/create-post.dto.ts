import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export enum PostType {
  Post = 'post',
  Page = 'page',
  Story = 'story',
  Series = 'series',
}

export enum postStatus {
  Draft = 'draft',
  Scheduled = 'scheduled',
  Review = 'review',
  Published = 'published',
}

import { CreatePostMetaOptionsDto } from 'src/meta-options/dtos/create-post-metaoption.dto';

// MARK: CreatePostDto
export class CreatePostDto {
  @ApiProperty({
    description: 'This is title of the blog post',
    example: 'This is a title',
  })
  @IsString()
  @MinLength(3)
  @MaxLength(512)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    enum: PostType,
    description: "Possible values, 'post', 'page', 'story', 'series'",
  })
  @IsNotEmpty()
  @IsEnum(PostType)
  postType: PostType;

  @ApiProperty({
    description: "For example - 'my-url'",
    example: 'my-blog-post',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'Slug must be lowercase and can only contain letters, numbers, and hyphens eg: my-url',
  })
  slug: string;

  @ApiProperty({
    enum: postStatus,
    description: "Possible values, 'draft', 'scheduled', 'review', 'published'",
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;

  @ApiPropertyOptional({
    description: 'Content of the post',
    example: 'This is the content of the post',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @IsJSON()
  @IsOptional()
  schema?: string;

  @ApiPropertyOptional({
    description: 'Featured image of the post',
    example: 'https://example.com/image.jpg',
  })
  @IsString()
  @IsUrl()
  @MaxLength(1024)
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    description: 'The date on which the post is published',
    example: '2023-10-01T12:00:00Z',
  })
  @IsISO8601()
  @IsOptional()
  publishOn: Date;

  @ApiPropertyOptional({
    description: 'Array of tags passed as strings',
    example: ['nestjs', 'typescript'],
  })
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  // @ApiPropertyOptional({
  //   type: 'object',
  //   required: false,
  //   items: {
  //     type: 'object',
  //     properties: {
  //       metavalue: {
  //         type: 'json',
  //         description: 'The metaValue is a JSON string',
  //         example: '{"sidebarEnabled": true,}',
  //       },
  //     },
  //   },
  // })
  // @IsOptional()
  // @ValidateNested({ each: true })
  // @Type(() => CreatePostMetaOptionsDto)
  // metaOptions?: CreatePostMetaOptionsDto | null;

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        metavalue: {
          type: 'json',
          description: 'The metaValue is a JSON string',
          example: '{"sidebarEnabled": true,}',
        },
      },
    },
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto | null;
}
