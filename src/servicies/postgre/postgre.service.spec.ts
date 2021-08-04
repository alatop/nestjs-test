import { Test, TestingModule } from '@nestjs/testing';
import { PostgreService } from './postgre.service';

describe('PostgreService', () => {
  let service: PostgreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostgreService],
    }).compile();

    service = module.get<PostgreService>(PostgreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
