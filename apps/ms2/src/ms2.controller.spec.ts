import { Test, TestingModule } from '@nestjs/testing';
import { Ms2Controller } from './ms2.controller';
import { Ms2Service } from './ms2.service';

describe('Ms2Controller', () => {
  let ms2Controller: Ms2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Ms2Controller],
      providers: [Ms2Service],
    }).compile();

    ms2Controller = app.get<Ms2Controller>(Ms2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ms2Controller.getHello()).toBe('Hello World!');
    });
  });
});
