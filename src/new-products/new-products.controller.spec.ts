import { Test, TestingModule } from '@nestjs/testing';
import { NewProductsController } from './new-products.controller';
import { NewProductsService } from './new-products.service';

describe('NewProductsController', () => {
  let controller: NewProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewProductsController],
      providers: [NewProductsService],
    }).compile();

    controller = module.get<NewProductsController>(NewProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
