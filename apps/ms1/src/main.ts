import { NestFactory } from '@nestjs/core';
import { Ms1Module } from './ms1.module';

async function bootstrap() {
  const app = await NestFactory.create(Ms1Module);
  await app.listen(3000);
}
bootstrap();
