import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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

  @Column()
  password: string;
}
