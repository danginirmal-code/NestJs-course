import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './users.schema.js';
import { UserController } from './user.controller.js';

@Module({
  imports:[MongooseModule.forFeature([{name:Users.name,schema:UsersSchema}])],
  providers: [UserService],
  controllers:[UserController]
})
export class UserModule {}
