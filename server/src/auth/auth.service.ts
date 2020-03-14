import { Injectable } from '@nestjs/common';
import { User } from 'src/models/auth/auth.dto';

@Injectable()
export class AuthService {
  constructor() {}

  async userPasswordIsCorrect(
    username: string,
    password: string,
  ): Promise<User[]> {
    return await User.query()
      .select('username')
      .where('username', username)
      .where('password', password);
  }

  async userIsRegistered(username: string): Promise<boolean> {
    return (
      (await User.query()
        .select('username')
        .where('username', username)
        .resultSize()) === 1
    );
  }

  async registerUser(username, password) {
    return User.knexQuery().insert({
      username,
      password,
    });
  }
}
