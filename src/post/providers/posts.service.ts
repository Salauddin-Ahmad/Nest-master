import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/user.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { PostEntity } from '../post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaoptionEntity } from 'src/meta-options/meta-option.entity';

@Injectable()
export class PostsService {
  // Injecting UserService to use its methods

  constructor(
    /**
     * Injecting the user service
     */
    private readonly userService: UserService,
    /**
     * Injecting the Post Repository
     */
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,

    @InjectRepository(MetaoptionEntity)
    private readonly metaOptionsRepository: Repository<MetaoptionEntity>,
  ) {}

  public async create(createPostDto: CreatePostDto) {
    // create post

    // Find the author from database on the authorId

    const author = await this.userService.findOneById(createPostDto.authorId);
    if (!author) {
      throw new Error(`Author not found`);
    }

    const post = this.postRepository.create({
      ...createPostDto,
      authorId: author,
    });
    return await this.postRepository.save(post);
  }

  public findUser(userId: string) {
    const userID = this.userService.findOneById(userId);

    return [
      {
        user: userID,
        postTitle: 'Post 1',
        content: 'Content of Post 1',
      },
      {
        user: userID,
        postTitle: 'Post 2',
        content: 'Content of Post 2',
      },
    ];
  }

  public async findAllPosts() {
    // const user = this.userService.findOneById();

    const posts = await this.postRepository.find({
      relations: {
        metaOptions: true,
      }, // set eager true inside entity does the same as this line above
      // so we can use both
    });
    console.log(posts);
    return posts;
  }

  public async deletePost(id: number) {
    // : Promise<{ deleted: boolean; id: number }> for the return type

    //find the post
    await this.postRepository.delete({ id });

    // deleting the post

    // await this.postRepository.delete(id);

    // //delte the metaoptions
    // if (post?.metaOptions) {
    //   await this.metaOptionsRepository.delete(post.metaOptions.id);
    // }

    // const inveresePost = await this.metaOptionsRepository.find({
    //   where: { id: post?.metaOptions?.id },
    //   relations: {
    //     post: true,
    //   },
    // });

    // console.log(inveresePost);

    return { deleted: true, id };
  }
}
