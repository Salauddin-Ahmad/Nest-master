import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './providers/posts.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostsService) {}

  /**
   *
   *  GEt localhost:3000/posts/:userId
   */

  @Get('/:userId')
  public getPosts(@Param('userId') userId: string) {
    return this.postService.findUser(userId);
  }
}
