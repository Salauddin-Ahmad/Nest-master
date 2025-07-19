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
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
  Patch,
} from '@nestjs/common';

import { Request } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-users-params.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
@Controller('users')
export class UsersController {
  /****
   *
   *    * Final Endpoint - /users/id?limit=10&page=1 
   * /users/1223 -> returns one user whos id is 1234
   * /users?limit=10&page=2 -> return page 2 with limt of pagination 10
   * Parama id - optional, convert to integer, cannot have a default value
   * USE CASES ==>
   * Query limit - integer, default 10
   * /users/ -> return all users with default pagination
   * Query page - integer, default value 1

   */

  @Get([':id', ':id/:optional'])
  public getUsers(
    // @Param('id', ParseIntPipe) id?: number, // using ParseIntPipe to ensure id is an integer
    @Param() getUserParamDto?: GetUserParamDto, // using GetUserParamDto to validate the id parameter
    @Param('optional') optional?: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit?: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page?: number,
  ) {
    console.log(getUserParamDto);
    // console.log(typeof limit, typeof page);

    return `request to get users route`;
  }

  @Post()
  public createUsers(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto, // using @Body() to get the body of the request
    // @Headers() headers: any, // using @Headers() to get all headers
    // @Req() req: Request, // using @Req() to get the entire request object
    // @Ip() ip: any, // using @Ip() to get the IP address of the request
  ) {
    // Log the request body, headers, IP address, method, and URL
    // console.log(headers, ip, req.method, req.url)

    console.log(createUserDto instanceof CreateUserDto);

    return 'you sent a post request to /users';
  }
  @Patch()
  public patchUsers(
    @Body(new ValidationPipe()) patchUserDto: PatchUserDto, // using @Body() to get the body of the request
  ) {
    console.log(patchUserDto);
    return patchUserDto;
  }
}
