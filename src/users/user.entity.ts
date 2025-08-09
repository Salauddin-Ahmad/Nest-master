import { PostEntity } from 'src/post/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 95,
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 95,
    nullable: true,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 95,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 95,
    nullable: false,
  })
  password: string;

  @OneToMany(() => PostEntity, (post) => post?.author)
  posts: PostEntity[];
}
