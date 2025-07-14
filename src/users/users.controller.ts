import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id/:optional') // Optional parameter 'optional'
  public getUsers(
    @Param('id') id: string, // Assuming 'id' is a path parameter
    @Param('optional') optional: string, // Assuming 'id' is a path parameter
  ) {
    console.log(id, optional);
    return 'you sent a get request to /users';
  }

  @Post()
  public createUsers() {
    return 'you sent a post request to /users';
  }
}
