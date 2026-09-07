import { Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { HttpFilter } from '../filters/http/http.filter.js';

@Controller('exception')
@UseFilters(HttpFilter)
export class ExceptionController {
    @Get('hello/:id')
    getHello(@Param('id', ParseIntPipe) id:number){
        return {message:`Your Id is ${id}`}
    }
}
