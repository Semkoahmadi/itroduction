import {BadRequestException, Injectable, PipeTransform} from "@nestjs/common";

@Injectable()
export class EmailValidatorPipe implements PipeTransform {
    transform(value: any) {
        console.log(value);
        const emailRegxp = /^[a-zA-Z0-9_.]{3,30}@[a-zA-Z0-9]{2,30}\.[a-zA-Z]{2,20}$/;
        if(emailRegxp.test(value)) return value;
        console.log(emailRegxp.test(value));
        throw new BadRequestException("invalid email");
    }
    
}