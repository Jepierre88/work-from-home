import { Test, TestingModule } from '@nestjs/testing';
import { NewCrudService } from './new-crud.service';

describe('NewCrudService', () => {
  let service: NewCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewCrudService],
    }).compile();

    service = module.get<NewCrudService>(NewCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
