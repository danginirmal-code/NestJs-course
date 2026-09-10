import { Controller, Get, Post } from '@nestjs/common';
import { LibraryService } from './library.service.js';

@Controller('library')
export class LibraryController {
    constructor(private readonly libraryService:LibraryService){}
    @Post()
    createLibaray(){
        return this.libraryService.createLibrary()
    }
    @Get()
    listLibary(){
        return this.libraryService.getLibaries()
    }
}
