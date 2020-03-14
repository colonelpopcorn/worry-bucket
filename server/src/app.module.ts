import { Module, Scope } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import * as moment from 'moment';

@Module({
  imports: [JwtModule],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    AuthService,
    {
      provide: 'MomentWrapper',
      useFactory: async () => moment(),
      scope: Scope.REQUEST,
    },
  ],
})
export class AppModule {}
