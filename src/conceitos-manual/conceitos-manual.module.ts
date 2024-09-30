/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConceitosManualController } from './conceitos-manual.controller';
import { ConceitosManualService } from './conceitos-manual.services';

@Module({
  controllers: [ConceitosManualController],
  providers: [ConceitosManualService]
})
export class ConceitosManualModule { }
