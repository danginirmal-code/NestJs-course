import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema.js';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name)  private userModel:Model<User>){}

    async createUser():Promise<User>{
    const user=new this.userModel({name:"Nirmal",address:{
        street:123,
        city:"Nepal"
    }})
    return user.save()
}
    async getAll():Promise<User[]>{
        return this.userModel.find()
    }
}
