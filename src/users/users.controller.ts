import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Headers,
  Req,
  Ip,
} from '@nestjs/common';

import { Request } from 'express';
@Controller('users')
export class UsersController {
  @Get([':id', ':id/:optional'])
  public getUsers(
    @Param('id') id?: any, // just to grab the id from the URL
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
  public createUsers(
    @Body() request: any, // using @Body() to get the body of the request
    @Headers() headers: any, // using @Headers() to get all headers
    @Req() req: Request, // using @Req() to get the entire request object
    @Ip() ip: any, // using @Ip() to get the IP address of the request
  ) {
    // Log the request body, headers, IP address, method, and URL
    console.log(headers, ip, req.method, req.url);

    return 'you sent a post request to /users';
  }
}
