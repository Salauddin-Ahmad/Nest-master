import { Module } from '@nestjs/common';

import { PostController } from './post.controller';
import { PostsService } from './providers/posts.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [PostsService],
  controllers: [PostController],
  imports: [UsersModule],
  exports: [PostsService], // Exporting PostService if needed in other modules
})
export class PostModule {}
