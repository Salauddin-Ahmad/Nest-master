import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  /**
   * find a user by id
   */

  public findOneById(id: string) {
    return {
      id: 1234,
      firstName: 'John',
      lastName: 'Doe',
    };
  }
}
