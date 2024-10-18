import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewCrudService } from './new-crud.service';
import { CreateNewCrudDto } from './dto/create-new-crud.dto';
import { UpdateNewCrudDto } from './dto/update-new-crud.dto';

@Controller('new-crud')
export class NewCrudController {
  constructor(private readonly newCrudService: NewCrudService) { }

  @Post()
  create(@Body() createNewCrudDto: CreateNewCrudDto) {
    return this.newCrudService.create(createNewCrudDto);
  }

  @Get()
  findAll() {
    return this.newCrudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.newCrudService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateNewCrudDto: UpdateNewCrudDto) {
    return this.newCrudService.update(+id, updateNewCrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.newCrudService.remove(+id);
  }
}
