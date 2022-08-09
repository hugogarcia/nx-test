import { Test, TestingModule } from '@nestjs/testing';
import { CoreService } from 'libs/core/src/lib/core.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, CoreService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to nike-bff!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to nike-bff!',
      });
    });
  });
});
