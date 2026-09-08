import { Controller, Get } from '@nestjs/common';
import { EnvService } from './env.service.js';

@Controller('env')
export class EnvController {
    constructor(private readonly evService:EnvService){}
    @Get()
    getUrl(){
        return this.evService.getDbUrl()
    }
}
