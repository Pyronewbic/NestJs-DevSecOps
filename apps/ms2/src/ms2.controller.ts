import { Controller, Get } from '@nestjs/common';
import { Ms2Service } from './ms2.service';

@Controller()
export class Ms2Controller {
  constructor(private readonly ms2Service: Ms2Service) {}

  @Get()
  getHello(): string {
    return this.ms2Service.getHello();
  }
}
