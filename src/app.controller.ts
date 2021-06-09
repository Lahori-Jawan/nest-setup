import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './app/common/auth/public.meta';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test')
  test() {
    return 'I am protected';
  }
}
