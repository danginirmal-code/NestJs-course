import { Controller ,Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
    getEmployee(){
        return "User Fetched successfully"
    }

}
