import { Injectable } from '@nestjs/common';
import { Customer } from './interface/customer.interface.js';
import { CreateCustomerDto } from './dto/create-cutomer.dto.js';

@Injectable()
export class CustomerService {
    private customers:Customer[]=[];

    getAllCustomers():Customer[]{
        return this.customers

    }
    addCustomer(createCustomerDto:CreateCustomerDto){
        const newCustomer:Customer={
            id:Date.now(),
            ...createCustomerDto
        
        }
        this.customers.push(newCustomer)
        return newCustomer;
    }
}
