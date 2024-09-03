import { Test, TestingModule } from '@nestjs/testing';
import { DataJepierreController } from './data-jepierre.controller';

describe('DataJepierreController', () => {
  let controller: DataJepierreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataJepierreController],
    }).compile();

    controller = module.get<DataJepierreController>(DataJepierreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
