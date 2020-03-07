import { Controller, Post, Body, HttpCode, Logger } from '@nestjs/common';
import { LoginRequestDTO, LoginResponseDTO } from '../models/auth/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  private readonly logger: Logger = new Logger('AuthController');
  private readonly SUCCESS_REPSONSE = {
    success: true,
    responseMessage: 'LOGGED_IN_SUCCESSFULLY',
    token: '',
  };
  private readonly FAILURE_RESPONSE = {
    success: false,
    responseMessage: 'LOGIN_UNSUCCESSFUL',
  };

  constructor(private authService: AuthService) {}
  @Post('login')
  async login(@Body() body: LoginRequestDTO): Promise<LoginResponseDTO> {
    const { username, password } = body;
    if (await this.authService.userIsRegistered(username)) {
      return (await this.authService.userPasswordIsCorrect(username, password))
        ? this.SUCCESS_REPSONSE
        : this.FAILURE_RESPONSE;
    } else {
      this.logger.log('unsuccess.');
      await this.authService.registerUser(username, password);
      return this.SUCCESS_REPSONSE;
    }
  }
}
