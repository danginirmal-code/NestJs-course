import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserController } from './user/user.controller.js';
import { ProductService } from './product/product.service.js';
import { ProductController } from './product/product.controller.js';
import { EmployeeModule } from './employee/employee.module.js';
import { StudentModule } from './student/student.module.js';
import { CustomerModule } from './customer/customer.module.js';
import { TestController } from './test/test.controller.js';
import { UserRolesController } from './user-roles/user-roles.controller.js';
import { ExceptionController } from './exception/exception.controller.js';
import { LoggerMiddleware } from './middleware/logger/logger.middleware.js';
import { DatabaseService } from './database/database.service.js';
import { DatabaseController } from './database/database.controller.js';
import { ConfigModule } from '@nestjs/config';
import { EnvService } from './env/env.service.js';
import { EnvController } from './env/env.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module.js';
import { ProductModule } from './product/product.module.js';
import { LibraryModule } from './library/library.module.js';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot(({
     isGlobal:true
    })),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    // ObserveModule.forRoot({
    //   appKey: 'YOUR_APP_KEY',
    //   appSecret: 'YOUR_APP_SECRET',
    //   serviceId: 'nest-project',
    // }),
    EmployeeModule,
    StudentModule,
    CustomerModule,
    UserModule,
    ProductModule,
    LibraryModule,
  ],
  controllers: [AppController, TestController, UserRolesController, ExceptionController, DatabaseController, EnvController],
  providers: [AppService, DatabaseService, EnvService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*")
  }

}
