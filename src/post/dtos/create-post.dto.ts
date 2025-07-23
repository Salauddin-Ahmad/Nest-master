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

export class CreatePostMetaOptionsDto {
  @IsNotEmpty()
  @IsString()
  key: string;

  @IsString()
  @IsNotEmpty()
  value: string;
}

// MARK: CreatePostDto
export class CreatePostDto {
  @ApiProperty({
    description: 'This is title of the blog post',
    example: 'This is a title',
  })
  @IsString()
  @MinLength(3)
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

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description:
            'The key can be any string identifier for the meta option',
          example: 'sidebarEnabled',
        },
        value: {
          type: 'any',
          description: 'Any value that you want to associate with the key',
          example: 'true',
        },
      },
    },
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[];
}
