import { Body, Controller, Get, Param, Post, Query, Req} from '@nestjs/common';

import { Request } from 'express';
@Controller('users')
export class UsersController {
  @Get([':id', ':id/:optional'])
  public getUsers(
    @Param('id') id: any,
    @Param('optional') optional?: any,
    @Query() query?: any,
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { limit, offset } = query;
    console.log(limit, offset);
    console.log(id, optional);

    return optional
      ? `You asked for id=${id} with optional=${optional}`
      : `You asked for id=${id} only`;
  }

  @Post()
  public createUsers(@Req() request: Request) {
    console.log(request);
    return 'you sent a post request to /users';
  }
}
