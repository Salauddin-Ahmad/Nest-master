import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  CreatePostMetaOptionsDto,
  postStatus,
  PostType,
} from './dtos/create-post.dto';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: PostType,
    nullable: false,
    default: PostType.Post,
  })
  postType: PostType;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: postStatus,
    default: postStatus.Draft,
  })
  status: postStatus;

  @Column({
    type: 'text',
    nullable: true,
  })
  content: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  schema: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImage?: string;

  @Column({
    type: 'timestamp', // 'datetime' in mySQL
    nullable: true,
  })
  publishOn?: Date;

  @Column({
    type: 'simple-array',
    nullable: true,
  })
  tags?: string[];
  meta?: CreatePostMetaOptionsDto[];
}
