import { Injectable } from '@nestjs/common';

@Injectable()
export class Ms1Service {
  getHello(): string {
    return 'Hello World!';
  }
}
