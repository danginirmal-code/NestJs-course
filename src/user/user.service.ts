import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './users.schema.js';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(Users.name)  private userModel:Model<Users>){}

    async createUser():Promise<Users>{
    const user=new this.userModel({name:"Nirmal",address:{
        street:123,
        city:"Nepal"
    }})
    return user.save()
}
    async getAll():Promise<Users[]>{
        return this.userModel.find()
    }
}
