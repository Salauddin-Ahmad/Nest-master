import { Body, Injectable } from '@nestjs/common';
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

    const post = this.postRepository.create(createPostDto);

    // let metaOptions = createPostDto.metaOptions
    //   ? this.metaOptionsRepository.create(createPostDto.metaOptions)
    //   : null;

    // if (metaOptions) {
    //   await this.metaOptionsRepository.save(metaOptions);
    // }

    // // create a post
    // const post = this.postRepository.create({
    //   ...createPostDto,
    //   metaOptions: metaOptions,
    // });

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
}
