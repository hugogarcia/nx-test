import { Controller, Get } from '@nestjs/common';
import { CoreService } from 'libs/core/src/lib/core.service';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly coreService: CoreService) {}

  @Get()
  getData() {
    return this.appService.getData(); 
  }

  @Get('core')
  getCoreData() {
    return this.coreService.getMessage();
  }
}
