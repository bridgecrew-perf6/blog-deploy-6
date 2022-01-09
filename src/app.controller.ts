import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('haha')
  hah(): string {
    return 'hah';
  }
}
