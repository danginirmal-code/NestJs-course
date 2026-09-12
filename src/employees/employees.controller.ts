import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';

import { Employee } from './employees.entity.js';
import { EmployeesService } from './employees.service.js';
import { stringify } from 'querystring';
import { SupabaseAuthGuard} from '../auth/supabse-auth/supabse-auth.guard.js';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeeService:EmployeesService){}
    @Post()
    async createEmployee(@Body() body:Partial<Employee>):Promise<Employee>{
      return  this.employeeService.create(body)
    }
    @UseGuards(SupabaseAuthGuard)
    @Get()
    async findAll():Promise<Employee[]>{
        return this.employeeService.findAll()

    }
    @Get('search')
    async searchEmployees( @Query('name') name:string,@Query('department') department?:string):Promise<Employee[]>{
        return this.employeeService.search({name,department})
       


    }
    @Get(":id")
    async findOne(@Param('id') id:number):Promise<Employee>{
        return this.employeeService.findOne(id)
    }
    @Put(":id")
    async updateOne(@Param('id') id:number,@Body() body:Partial<Employee>):Promise<Employee>{
        return this.employeeService.update(id,body)
    }
    @Delete(':id')
    async delete(@Param('id') id:number):Promise<{message:string}>{
       return this.employeeService.delete(id)
    }

}
