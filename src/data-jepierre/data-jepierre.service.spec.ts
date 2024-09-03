import { Test, TestingModule } from '@nestjs/testing';
import { DataJepierreService } from './data-jepierre.service';

describe('DataJepierreService', () => {
  let service: DataJepierreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataJepierreService],
    }).compile();

    service = module.get<DataJepierreService>(DataJepierreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
