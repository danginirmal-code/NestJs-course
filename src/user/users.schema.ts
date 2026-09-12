import {Prop,Schema,SchemaFactory} from "@nestjs/mongoose"
import { Document } from "mongoose"
import { Address
 } from "./address.schema.js"
 @Schema()
 export class Users extends Document{
    @Prop()
    name:string
    @Prop({type:Address})
    address:Address
 }
 export const UsersSchema=SchemaFactory.createForClass(Users)