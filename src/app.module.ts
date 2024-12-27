import { MiddlewareConsumer, Module, NestModule, Post, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { loggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(loggerMiddleware).forRoutes({
      path: "/user",
      method: RequestMethod.GET
    },
      {
        path: "/user",
        method: RequestMethod.POST
      }
    )
  }
}
