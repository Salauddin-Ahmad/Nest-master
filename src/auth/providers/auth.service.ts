import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService)) // Using forwardRef to avoid circular dependency
    private readonly userService: UserService,
  ) {}
  public login(email: string, password: string, id: string): string {
    //check user database
    //login
    //token
    const user = this.userService.findOneById(id);
    return 'sample token';
  }

  public isAuth() {
    return true;
  }
}
