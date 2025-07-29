import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostController } from './post/post.controller';
import { PostModule } from './post/post.module';
import { PostsService } from './post/providers/posts.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    PostModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [],
      synchronize: true,
      port: 5432,
      username: 'postgres',
      password: 'asdsasds34@',
      host: '127.0.0.1',
      database: 'Nest-master',
    }),
  ],
  controllers: [AppController, PostController],
  providers: [AppService, PostsService],
})
export class AppModule {}
