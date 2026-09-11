import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller.js';
import { ProjectService } from './project.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Developer, DeveloperSchema } from './schema/developer.schema.js';
import { Project, ProjectSchema } from './schema/project.schema.js';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name:Developer.name,schema:DeveloperSchema
    },{
      name:Project.name,schema:ProjectSchema
    }])
  ],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
