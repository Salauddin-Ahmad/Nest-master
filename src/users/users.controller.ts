import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  // Headers,
  // Req,
  // Ip,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
  Patch,
} from '@nestjs/common';

// import { Request } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-users-params.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UserService } from './providers/user.service';
@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UserService, // Injecting UserService to use its methods
  ) {}

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
    @Param() getUserParamDto: GetUserParamDto, // using GetUserParamDto to validate the id parameter
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    // @Param('optional') optional?: number, // optional parameter
  ) {
    // console.log(typeof limit, typeof page);

    return this.userService.findAll(getUserParamDto, limit, page);
  }

  @Post()
  public createUsers(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto, // using @Body() to get the body of the request
  ) {
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
