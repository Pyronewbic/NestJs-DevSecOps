import { Controller, Get } from '@nestjs/common';
import { Ms1Service } from './ms1.service';

@Controller()
export class Ms1Controller {
  constructor(private readonly ms1Service: Ms1Service) {}

  @Get()
  getHello(): string {
    return this.ms1Service.getHello();
  }
}
