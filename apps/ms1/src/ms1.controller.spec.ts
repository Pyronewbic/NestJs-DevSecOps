import { Test, TestingModule } from '@nestjs/testing';
import { Ms1Controller } from './ms1.controller';
import { Ms1Service } from './ms1.service';

describe('Ms1Controller', () => {
  let ms1Controller: Ms1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Ms1Controller],
      providers: [Ms1Service],
    }).compile();

    ms1Controller = app.get<Ms1Controller>(Ms1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ms1Controller.getHello()).toBe('Hello World!');
    });
  });
});
