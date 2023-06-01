import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';
import { StudentModule } from './student/student.module';
import { ProductModule } from './product/product.module';
import { NewProductsModule } from './new-products/new-products.module';
import { ExpensesModule } from './expenses/expenses.module';
import { ListModule } from './list/list.module';
import { ComputersModule } from './computers/computers.module';
import { MobilesModule } from './mobiles/mobiles.module';
import { AllCategoriesModule } from './all-categories/all-categories.module';

@Module({
  imports: [UserModule, RoleModule, StudentModule, ProductModule, NewProductsModule, ExpensesModule, ListModule, ComputersModule, MobilesModule, AllCategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
