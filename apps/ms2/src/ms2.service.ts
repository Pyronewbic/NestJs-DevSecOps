import { Injectable } from '@nestjs/common';

@Injectable()
export class Ms2Service {
  getHello(): string {
    return 'Hello World!';
  }
}
