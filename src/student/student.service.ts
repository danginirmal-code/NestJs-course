import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './student.schema.js';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name) private studentModel:Model<StudentDocument>
    ){}
    
getAllStudents():Promise<Student[]>{
    return this.studentModel.find().exec()
}
getStudentById(id:string):Promise<Student | null>{
    const student=this.studentModel.findById(id).exec()
    if(!student){
        throw new NotFoundException("Student not found")
    }
    return student;

}
createStudent(data:Partial<Student>):Promise<Student>{
    const newStudent=new this.studentModel(data);
    return newStudent.save();
}
updateStudent(id:string,data:Partial<Student>):Promise<Student | null>{
    return this.studentModel.findByIdAndUpdate(id,data,{new:true}).exec()

 
    
}

patchStudent(id:string,data:Partial<Student>):Promise<Student | null>{
    return this.studentModel.findByIdAndUpdate(id,data,{new:true}).exec()
}
deleteStudent(id:string):Promise<Student | null>{
    return this.studentModel.findByIdAndDelete(id).exec()
   
}
}
