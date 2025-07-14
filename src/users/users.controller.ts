import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get(':id')
  @Get(':id/:optional')
  public getUsers(@Param('id') id: any, @Param('optional') optional?: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    console.log({ id, optional });
    return optional
      ? `You asked for id=${id} with optional=${optional}`
      : `You asked for id=${id} only`;
  }

  @Post()
  public createUsers() {
    return 'you sent a post request to /users';
  }
}
