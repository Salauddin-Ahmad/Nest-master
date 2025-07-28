/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetUserParamDto } from './../dtos/get-users-params.dto';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * Class to connet user table and business operations
 */
@Injectable()
export class UserService {
  /**
   * The method to get all the users from the database
   */
  constructor(
    @Inject(forwardRef(() => AuthService)) // Using forwardRef to avoid circular dependency
    private readonly authService: AuthService,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(`Is Authenticated: ${isAuth}`);
  }

  /**
   * find all users
   */
  public findAll(
    getUserParamDto: GetUserParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(`Is Authenticated: ${isAuth}`);

    return [
      {
        firstName: 'John',
        lastName: 'Doe',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
      },
    ];
  }

  /**
   * find a single user by id
   */
  public findOneById(userId: string) {
    // Simulating a user lookup
    return {
      id: userId,
      firstName: 'John',
      lastName: 'Doe',
    };
  }
}
