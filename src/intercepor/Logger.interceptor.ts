import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable,tap } from "rxjs";

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>) {
        //befor
        console.log("Befor Route Handler");
     console.log(new Date().getTime());

     //afetr
     return next.handle().pipe(tap(() => console.log("After Route Handler...",Date.now())))
    }

}