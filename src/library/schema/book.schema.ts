import {Prop,Schema,SchemaFactory} from "@nestjs/mongoose"
import { Document } from "mongoose"
@Schema()
export class Books extends Document{
    @Prop()
    title:string
    @Prop()
    author:string
}
export const BookSchemas=SchemaFactory.createForClass(Books)
