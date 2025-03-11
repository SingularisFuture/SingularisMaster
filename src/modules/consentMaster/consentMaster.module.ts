import { Module } from '@nestjs/common';
import { ConsentMasterController } from './consentMaster.controller';
import { ConsentMasterService } from './consentMaster.service';

@Module({
  controllers: [ConsentMasterController],
  providers: [ConsentMasterService],
})
export class ConsentMasterModule {}
