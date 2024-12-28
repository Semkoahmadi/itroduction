import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { LoggerInterceptor } from './intercepor/Logger.interceptor';
import { TransformerInterceptor } from './intercepor/Transformer.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { checkYearGuard } from './guards/CheckYear.guard';

@Controller()
@UseInterceptors(TransformerInterceptor)
@UseGuards(AuthGuard)
@UseGuards(checkYearGuard)
export class AppController {
  @Get()
  sayHello(): string {
    return "سال نو میلادی مبارک";
  }
  @Get("/data")
  sendData(): any {
    return {
      users: [
        {
        id:1,
        name:"ahmadahmadi"
      }]
    };
  }
}
