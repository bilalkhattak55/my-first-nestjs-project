import { PartialType } from '@nestjs/mapped-types';
import { CreateNewProductDto } from './create-new-product.dto';

export class UpdateNewProductDto extends PartialType(CreateNewProductDto) {}
