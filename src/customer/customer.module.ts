import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service.js';
import { CustomerController } from './customer.controller.js';

@Module({
  providers: [CustomerService],
  controllers: [CustomerController]
})
export class CustomerModule {}
