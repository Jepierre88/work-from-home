import { Module } from '@nestjs/common';
import { NewCrudService } from './new-crud.service';
import { NewCrudController } from './new-crud.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewCrud } from './entities/new-crud.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NewCrud])],
  controllers: [NewCrudController],
  providers: [NewCrudService],
})
export class NewCrudModule { }
