import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from '../common/pipes/uppercase/uppercase.pipe.js';

@Controller('test')
export class TestController {
    @Post('custom')
    transformName(@Body('name', new UppercasePipe()) name:string){
       return {message:`Received name ${name}`}
    }
}
