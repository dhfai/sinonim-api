import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sinonim } from './sinonim.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SinonimService {
  private readonly logger = new Logger(SinonimService.name);

  constructor(
    @InjectRepository(Sinonim)
    private readonly sinonimRepository: Repository<Sinonim>,
  ) {}

  async findAll(): Promise<Sinonim[]> {
    this.logger.log('Fetching all sinonims');
    const result = await this.sinonimRepository.find();
    this.logger.log(`Found ${result.length} sinonims`);
    return result;
  }

  async findByKata(kata: string): Promise<Sinonim[]> {
    this.logger.log(`Fetching sinonims for kata: ${kata}`);
    const result = await this.sinonimRepository.find({ where: { kata } });
    this.logger.log(`Found ${result.length} sinonims for kata: ${kata}`);
    return result;
  }

  async findBySinonim(sinonim: string): Promise<Sinonim[]> {
    const sinonims = await this.sinonimRepository.find();
    const result = sinonims.filter((entry) => 
      entry.sinonim.split(', ').includes(sinonim)
    );
    
    if (result.length === 0) {
      throw new NotFoundException(`Sinonim "${sinonim}" tidak ditemukan.`);
    }
    return result;
  }
}
