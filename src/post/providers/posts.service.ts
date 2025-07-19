import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/user.service';

@Injectable()
export class PostsService {
  // Injecting UserService to use its methods
  constructor(private readonly userService: UserService) {}

  public findAll(userId: string) {
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
