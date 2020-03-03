import { Injectable } from '@nestjs/common';
import { version } from '../package.json';

@Injectable()
export class AppService {
  getAppVersion(): { [key: string]: any } {
    return { version };
  }
}
