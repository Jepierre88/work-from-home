import { Test, TestingModule } from '@nestjs/testing';
import { NewCrudController } from './new-crud.controller';
import { NewCrudService } from './new-crud.service';

describe('NewCrudController', () => {
  let controller: NewCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewCrudController],
      providers: [NewCrudService],
    }).compile();

    controller = module.get<NewCrudController>(NewCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
