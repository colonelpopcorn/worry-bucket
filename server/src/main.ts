import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from '../environment/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
  });

  await app.listen(config.port);
}
bootstrap();
