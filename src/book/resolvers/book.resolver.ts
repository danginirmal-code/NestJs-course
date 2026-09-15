import { Resolver,Query ,Args, Mutation, ObjectType, Field} from '@nestjs/graphql';
import { BookService } from '../book.service.js';
import { Book } from '../model/book.model.js';
import { CreateBookInput } from '../dto/createbook.dto.js';
import { UpdateBookInput } from '../dto/update-book.input.js';

@ObjectType()
class MessageResponse {
  @Field()
  message: string;
}
@Resolver()
export class BookResolver {
    constructor(private readonly bookService:BookService){

    }
    @Query(()=>[Book],{name:'getAllBooks'})
    async findAll(){
        return this.bookService.findAll()

    }
    @Query(()=>Book,{name:'getBook'})
    async getBook(@Args('id',{type:()=>String}) id:string){
        return this.bookService.findOne(id)

    }
    @Mutation(()=>Book)
    async createBook(@Args('input') input:CreateBookInput){
        return this.bookService.create(input)
    }
     @Mutation(()=>Book)
    async updateBook(@Args('input') input:UpdateBookInput){
        return this.bookService.update(input)
    }
     @Mutation(()=>MessageResponse)
   async deleteBook(@Args('id',{type:()=>String}) id:string){
        return this.bookService.remove(id)
   }
}
