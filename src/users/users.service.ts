import { Injectable } from '@nestjs/common';
import { accessType, user } from 'src/types/types';

@Injectable()
export class UsersService {
  private users: user[] = [
    { id: 0, name: 'name1', access: 'admin' },
    { id: 1, name: 'name2', access: 'moderator' },
  ];

  getUsers(access: accessType) {
    if (access) {
      return this.users.filter((user) => user.access === access);
    }

    return this.users;
  }
}
