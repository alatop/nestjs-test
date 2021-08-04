import { Test, TestingModule } from '@nestjs/testing';
import { PurepgController } from './purepg.controller';

describe('PurepgController', () => {
  let controller: PurepgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurepgController],
    }).compile();

    controller = module.get<PurepgController>(PurepgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
