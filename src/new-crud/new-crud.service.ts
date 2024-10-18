import { Injectable } from '@nestjs/common';
import { CreateNewCrudDto } from './dto/create-new-crud.dto';
import { UpdateNewCrudDto } from './dto/update-new-crud.dto';
import { Repository } from 'typeorm';
import { NewCrud } from './entities/new-crud.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NewCrudService {

  constructor(@InjectRepository(NewCrud) private readonly newCrudRepository: Repository<NewCrud>) { }
  async create(createNewCrudDto: CreateNewCrudDto) {
    const newUser = await this.newCrudRepository.save(createNewCrudDto)
  }

  async findAll() {
    return await this.newCrudRepository.find()
  }

  async findOne(id: number) {
    return await this.newCrudRepository.findOne({
      where: { id: id },
      relations: ["user"]
    });
  }

  update(id: number, updateNewCrudDto: UpdateNewCrudDto) {
    return `This action updates a #${id} newCrud`;
  }

  remove(id: number) {
    return `This action removes a #${id} newCrud`;
  }
}
