import { Module } from '@nestjs/common';
import { Ms1Controller } from './ms1.controller';
import { Ms1Service } from './ms1.service';

@Module({
  imports: [],
  controllers: [Ms1Controller],
  providers: [Ms1Service],
})
export class Ms1Module {}
