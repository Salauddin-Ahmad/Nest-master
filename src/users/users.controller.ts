import {
  Body,
  Controller,
  Patch,
  Post,
  // Get,
  // Query,
  // Headers,
  // Req,
  // Ip,
  // ParseIntPipe,
  // DefaultValuePipe,
  // ValidationPipe,
  // Param,
} from '@nestjs/common';

// import { Request } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UserService } from './providers/user.service';
// import { GetUserParamDto } from './dtos/get-users-params.dto';
// import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
@Controller('users')
// @ApiTags('Users') // Swagger tag for grouping endpoints
export class UsersController {
  constructor(
    private readonly userService: UserService, // Injecting UserService to use its methods
  ) {}

  @Post()
  public createUsers(@Body() createUser: CreateUserDto) {
    return this.userService.createUser(createUser);
  }
  @Patch()
  public patchUsers(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}

/****
   *
   ** Final Endpoint - /users/id?limit=10&page=1 
   * /users/1223 -> returns one user whos id is 1234
   * /users?limit=10&page=2 -> return page 2 with limt of pagination 10
   * Parama id - optional, convert to integer, cannot have a default value
   * USE CASES ==>
   * Query limit - integer, default 10
   * /users/ -> return all users with default pagination
   * Query page - integer, default value 1

   */

//   @Get([':id', ':id/:optional'])
//   @ApiOperation({
//     summary: 'Get user by id or all users with pagination',
//     description: 'Fetch a user by their ID or all users',
//   })
//   @ApiResponse({
//     status: 200,
//     description: 'users fetched successfully',
//     type: GetUserParamDto, // Adjust this to the appropriate response DTO
//   })
//   @ApiQuery({
//     name: 'limit',
//     type: 'number',
//     required: false,
//     description: 'Number of entries to return per query',
//     example: 10,
//   })
//   @ApiQuery({
//     name: 'page',
//     type: 'number',
//     required: false,
//     description: 'Position of the page to return',
//     example: 1,
//   })
//   public getUsers(
//     // @Param('id', ParseIntPipe) id?: number, // using ParseIntPipe to ensure id is an integer
//     @Param() getUserParamDto: GetUserParamDto, // using GetUserParamDto to validate the id parameter
//     @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
//     @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
//     // @Param('optional') optional?: number, // optional parameter
//   ) {
//     // console.log(typeof limit, typeof page);

//     return this.userService.findAll(getUserParamDto, limit, page);
//   }

//   @Post()
//   public createUsers(
//     @Body(new ValidationPipe()) createUserDto: CreateUserDto, // using @Body() to get the body of the request
//   ) {
//     console.log(createUserDto instanceof CreateUserDto);

//     return 'you sent a post request to /users';
//   }
//   @Patch()
//   public patchUsers(
//     @Body(new ValidationPipe()) patchUserDto: PatchUserDto, // using @Body() to get the body of the request
//   ) {
//     console.log(patchUserDto);
//     return patchUserDto;
//   }
// }
