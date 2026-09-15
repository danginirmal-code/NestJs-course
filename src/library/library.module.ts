import { Module } from '@nestjs/common';
import { LibraryService } from './library.service.js';
import { LibraryController } from './library.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Library, LibrarySchema } from './schema/library.schema.js';
import { Books, BookSchemas } from './schema/book.schema.js';

@Module({
  imports:[MongooseModule.forFeature([
    {name:Library.name,schema:LibrarySchema},
    {name:Books.name,schema:BookSchemas}
  ])],
  providers: [LibraryService],
  controllers: [LibraryController]
})
export class LibraryModule {}
