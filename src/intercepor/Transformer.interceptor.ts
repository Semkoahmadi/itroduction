import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class TransformerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    //befor
    console.log('Befor Route Handler');
    console.log(new Date().getTime());

    //afetr
    return next.handle().pipe(
      map((data) => {
        if (typeof data === 'string') {
          return {
            data: {
              message: data,
            },
          };
        }
        return { data };
      })
    );
  }
}
