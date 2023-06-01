import { Injectable } from '@nestjs/common';
import { CreateNewProductDto } from './dto/create-new-product.dto';
import { UpdateNewProductDto } from './dto/update-new-product.dto';

@Injectable()
export class NewProductsService {
  create(createNewProductDto: CreateNewProductDto) {
    return 'This action adds a new newProduct';
  }

  findAll() {
    return `This action returns all newProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newProduct`;
  }

  update(id: number, updateNewProductDto: UpdateNewProductDto) {
    return `This action updates a #${id} newProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} newProduct`;
  }
}
