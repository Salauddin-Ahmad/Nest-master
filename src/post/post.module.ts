import { Module } from '@nestjs/common';

import { PostController } from './post.controller';
import { PostsService } from './providers/posts.service';
import { UsersModule } from 'src/users/users.module';
import { PostEntity } from './post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaoptionEntity } from 'src/meta-options/meta-option.entity';
import { MetaOptionsModule } from 'src/meta-options/meta-options.module';
import { TagsModule } from 'src/tags/tags.module';

@Module({
  controllers: [PostController],
  providers: [PostsService],
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([PostEntity, MetaoptionEntity]),
    MetaOptionsModule,
    TagsModule,
  ],
  exports: [PostsService], // Exporting PostService if needed in other modules
})
export class PostModule {}
