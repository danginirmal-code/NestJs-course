import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerService } from './customer.service.js';
import { CreateCustomerDto } from './dto/create-cutomer.dto.js';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService:CustomerService){}
    @Get()
    getAll(){
        return this.customerService.getAllCustomers()
    }
    @Post()
    post(@Body() createCustomer:CreateCustomerDto){
    return this.customerService.addCustomer(createCustomer)

    }
}
