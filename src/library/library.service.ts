import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schema/book.schema.js';
import { Library } from './schema/library.schema.js';

@Injectable()
export class LibraryService {
    constructor(
    @InjectModel(Book.name) private bookModel:Model<Book>,
    @InjectModel(Library.name) private libraryModel:Model<Library>
){}

async createLibrary():Promise<Library>{
    const book1=await this.bookModel.create({
        title:"Nirmal Dangi",author:"Nirmal"
    })
    const book2=await this.bookModel.create({
        title:"Nirmal Dangi ko kitab",author:"Nirmal"
    })
    const library=new this.libraryModel({
        name:"Central library",
        books:[book1._id,book2._id]
    })
    return library.save()
}
async getLibaries():Promise<Library[]>{
    const data=await this.libraryModel.find().populate('books')
    return data
}
}
