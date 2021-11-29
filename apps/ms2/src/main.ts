import { NestFactory } from '@nestjs/core';
import { Ms2Module } from './ms2.module';

async function bootstrap() {
  const app = await NestFactory.create(Ms2Module);
  await app.listen(3000);
}
bootstrap();
