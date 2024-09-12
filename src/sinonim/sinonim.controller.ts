import { Controller, Get, Param } from '@nestjs/common';
import { SinonimService } from './sinonim.service';

@Controller('sinonim')
export class SinonimController {
    constructor(
        private readonly sinonimService: SinonimService,
    ) {}

    @Get()
    async findAll() {
        return this.sinonimService.findAll();
    }

    @Get('kata/:kata')
    async findByKata(@Param('kata') kata: string) {
        return this.sinonimService.findByKata(kata);
    }

    @Get('spesifik/:sinonim')
    async findBySinonim(@Param('sinonim') sinonim: string) {
        return this.sinonimService.findBySinonim(sinonim);
    }

}
