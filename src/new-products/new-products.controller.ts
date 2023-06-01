import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewProductsService } from './new-products.service';
import { CreateNewProductDto } from './dto/create-new-product.dto';
import { UpdateNewProductDto } from './dto/update-new-product.dto';

@Controller('new-products')
export class NewProductsController {
  constructor(private readonly newProductsService: NewProductsService) {}

  @Post()
  create(@Body() createNewProductDto: CreateNewProductDto) {
    return this.newProductsService.create(createNewProductDto);
  }

  @Get()
  findAll() {
    return this.newProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewProductDto: UpdateNewProductDto) {
    return this.newProductsService.update(+id, updateNewProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newProductsService.remove(+id);
  }
}
