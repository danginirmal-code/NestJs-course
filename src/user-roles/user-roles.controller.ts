import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../guards/roles/roles.guard.js';
import { Roles } from '../guards/roles/roles.decorator.js';
import { Role } from '../guards/roles/roles.enum.js';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAdminData(){
        return {message:'Only admin can access'}
    }
}
