import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { postStatus, PostType } from './dtos/create-post.dto';
import { MetaoptionEntity } from 'src/meta-options/meta-option.entity';
import { User } from 'src/users/user.entity';

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
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp', // 'datetime' in mySQL
    nullable: true,
  })
  publishOn?: Date;

  @OneToOne(() => MetaoptionEntity, (metaOptions) => metaOptions.post, {
    cascade: true,
    eager: true,
  })
  metaOptions?: MetaoptionEntity | null;

  @ManyToOne(() => User, (user) => user.posts, {
    eager: true,
  })
  author: User;

  tags?: string[];
}
