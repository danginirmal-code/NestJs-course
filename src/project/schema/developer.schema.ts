import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Developer {
  @Prop()
  name: string;

  @Prop({
    type: [{ type: Types.ObjectId, ref: 'Project' }],
  })
  projects: Types.ObjectId[];
}

export const DeveloperSchema = SchemaFactory.createForClass(Developer);
