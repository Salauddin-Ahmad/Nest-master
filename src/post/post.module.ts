import { Module } from '@nestjs/common';

import { PostController } from './post.controller';
import { PostsService } from './providers/posts.service';
import { UsersModule } from 'src/users/users.module';
import { PostEntity } from './post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [PostsService],
  controllers: [PostController],
  imports: [UsersModule, TypeOrmModule.forFeature([PostEntity])],
  exports: [PostsService, UsersModule], // Exporting PostService if needed in other modules
})
export class PostModule {}
