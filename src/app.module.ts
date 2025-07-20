import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostController } from './post/post.controller';
import { PostModule } from './post/post.module';
import { PostsService } from './post/providers/posts.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, PostModule, AuthModule],
  controllers: [AppController, PostController],
  providers: [AppService, PostsService],
})
export class AppModule {}
