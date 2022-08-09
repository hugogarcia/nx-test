import { Module } from '@nestjs/common';
import { CoreService } from './core.service';

@Module({
  controllers: [],
  providers: [CoreService],
  exports: [CoreService],
})
export class CoreModule {}
