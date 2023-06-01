import { Module } from '@nestjs/common';
import { NewProductsService } from './new-products.service';
import { NewProductsController } from './new-products.controller';

@Module({
  controllers: [NewProductsController],
  providers: [NewProductsService]
})
export class NewProductsModule {}
