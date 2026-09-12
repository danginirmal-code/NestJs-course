import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service.js';
import { EmployeesController } from './employees.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employees.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([Employee])],
  providers: [EmployeesService],
  controllers: [EmployeesController]
})
export class EmployeesModule {}
