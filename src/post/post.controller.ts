import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
@ApiTags('Posts') // Swagger tag for grouping endpoints
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

  @Post()
  public createPosty(
    @Body() createPostDto: CreatePostDto, // Assuming CreatePostDto is defined elsewhere
  ) {
    console.log(createPostDto);
  }
}
