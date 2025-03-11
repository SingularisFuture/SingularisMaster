import { Module } from '@nestjs/common';
import { IncomeBandMapController } from './incomeBandMap.controller';
import { IncomeStandardMasterController } from './incomeStandardMaster.controller';
import { IncomeStandardMasterService } from './incomeStandardMaster.service';

@Module({
  controllers: [IncomeBandMapController, IncomeStandardMasterController],
  providers: [IncomeStandardMasterService],
})
export class IncomeStandardMasterModule {}
