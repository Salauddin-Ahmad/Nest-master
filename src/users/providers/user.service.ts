/* eslint-disable @typescript-eslint/no-unused-vars */
import { GetUserParamDto } from './../dtos/get-users-params.dto';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

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
    @InjectRepository(User)
    private userRepository: Repository<User>, // This should be replaced with the actual repository type
  ) {
    const isAuth = this.authService.isAuth();
    console.log(`Is Authenticated: ${isAuth}`);
  }

  public async createUser(createUserDto: CreateUserDto) {
    // check if user already exists with the same email
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    // handle exception

    // create a new user
    let newUser = this.userRepository.create(createUserDto);
    newUser = await this.userRepository.save(newUser);
    return newUser;
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
