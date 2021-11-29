import { Module } from '@nestjs/common';
import { Ms2Controller } from './ms2.controller';
import { Ms2Service } from './ms2.service';

@Module({
  imports: [],
  controllers: [Ms2Controller],
  providers: [Ms2Service],
})
export class Ms2Module {}
