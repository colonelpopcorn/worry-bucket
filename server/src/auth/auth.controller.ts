import { Controller, Post, Body, HttpCode, Logger } from '@nestjs/common';
import { LoginRequestDTO } from '../models/auth/login-request.dto';

@Controller('auth')
export class AuthController {
  private readonly logger: Logger = new Logger('AuthController');
  @Post('login')
  login(@Body() body: LoginRequestDTO) {
    this.logger.log(body);
    const { username, password } = body;
    if (username === 'jonathan' && password === 'somepass') {
      this.logger.log('success.');
      return { success: true, responseMessage: 'LOGGED_IN_SUCCESSFULLY' };
    } else {
      this.logger.log('unsuccess.');

      return { success: false, responseMessage: 'LOGIN_UNSUCCESSFUL' };
    }
  }
}
