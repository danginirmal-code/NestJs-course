import { Module } from '@nestjs/common';
import { LibraryService } from './library.service.js';
import { LibraryController } from './library.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Library, LibrarySchema } from './schema/library.schema.js';
import { Book, BookSchema } from './schema/book.schema.js';

@Module({
  imports:[MongooseModule.forFeature([
    {name:Library.name,schema:LibrarySchema},
    {name:Book.name,schema:BookSchema}
  ])],
  providers: [LibraryService],
  controllers: [LibraryController]
})
export class LibraryModule {}
