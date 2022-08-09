import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreService {
  getMessage(): string {
    return 'TEEEEEEEST';
  }
}
