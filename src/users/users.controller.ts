import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  //GET /users ==> []
  @Get()
  getUsers() {
    return [];
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
