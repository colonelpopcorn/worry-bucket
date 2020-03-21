import {
  Controller,
  Post,
  Body,
  HttpCode,
  Logger,
  Inject,
} from '@nestjs/common';
import { LoginRequestDTO, LoginResponseDTO } from '../models/auth/auth.dto';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';
import * as moment from 'moment';

@Controller('auth')
export class AuthController {
  private readonly logger: Logger = new Logger('AuthController');

  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
    @Inject('MomentWrapper') private momentService: moment.Moment,
  ) {}
  @Post('login')
  async login(@Body() body: LoginRequestDTO): Promise<LoginResponseDTO> {
    const { username, password } = body;
    const pw = crypto.createHmac('sha512', password).digest('hex');
    if (await this.authService.userIsRegistered(username)) {
      const userRecord = await this.authService.userPasswordIsCorrect(
        username,
        pw,
      );
      return userRecord.length > 0
        ? this.getSuccessResponse(username, userRecord[0].$id())
        : this.getFailureResponse();
    } else {
      this.logger.log('unsuccess.');
      const userId = await this.authService.registerUser(username, pw);
      return this.getSuccessResponse(username, userId[0]);
    }
  }

  private getSuccessResponse(
    username: string,
    userId: number,
  ): LoginResponseDTO {
    const SUCCESS_REPSONSE = {
      success: true,
      responseMessage: 'LOGGED_IN_SUCCESSFULLY',
      token: '',
    };
    const token = this.jwtService.sign({
      username,
      userId,
    });
    return { ...SUCCESS_REPSONSE, token };
  }

  private getFailureResponse() {
    return { success: false, responseMessage: 'LOGIN_UNSUCCESSFUL' };
  }
}
