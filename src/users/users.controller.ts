import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { accessType } from 'src/types/types';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  //GET /users?access=admin ==> []
  @Get()
  getUsers(@Query('access') access: accessType) {
    const service = new UsersService();
    return service.getUsers(access);
  }
  //GET /users/:id ==> { ... }
  @Get(':id')
  getUser(@Param('id') id: string) {
    return {
      id,
    };
  }
  //POST /users
  @Post()
  createUsers(@Body() createUserDto: CreateUserDto) {
    return {
      name: createUserDto.name,
    };
  }
  //PUT /users/:id ==> { ... }
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      id,
      name: updateUserDto.name,
    };
  }
  //DELETE /users/:id
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return {
      id,
    };
  }
}
