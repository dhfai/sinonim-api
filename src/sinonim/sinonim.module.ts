import { Module } from '@nestjs/common';
import { SinonimService } from './sinonim.service';
import { SinonimController } from './sinonim.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sinonim } from './sinonim.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Sinonim])],
  providers: [SinonimService],
  controllers: [SinonimController]
})
export class SinonimModule {}
