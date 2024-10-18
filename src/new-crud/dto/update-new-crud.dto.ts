import { PartialType } from '@nestjs/mapped-types';
import { CreateNewCrudDto } from './create-new-crud.dto';

export class UpdateNewCrudDto extends PartialType(CreateNewCrudDto) {}
