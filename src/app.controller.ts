import { Controller, Get } from '@nestjs/common';


@Controller("/")
export class AppController {

  @Get("/semko")
  sayHello(): string {
  return "Say  SalamoAlikom"
}
}
