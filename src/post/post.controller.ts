import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

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

  @ApiOperation({
    summary: 'Creates a new post',
    description: 'Creates a new blog post with the provided details.',
  })
  @ApiResponse({
    status: 201,
    description: 'Post created successfully',
  })
  @Post()
  public createPosty(
    @Body() createPostDto: CreatePostDto, // Assuming CreatePostDto is defined elsewhere
  ) {
    console.log(createPostDto);
  }

  @ApiOperation({
    summary: 'Pathces the post',
    description: 'Updates an existing blog post with the provided details.',
  })
  @ApiResponse({
    status: 201,
    description: 'Post created successfully',
  })
  @Patch()
  public updatePost(@Body() patchPostsDto: PatchPostDto) {
    console.log(patchPostsDto);
  }
}
