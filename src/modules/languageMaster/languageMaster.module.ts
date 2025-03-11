import { Module } from '@nestjs/common';
import { ZoneLanguageMapController } from './zoneLanguageMap.controller';
import { LanguageMasterService } from './languageMaster.service';

@Module({
  controllers: [ZoneLanguageMapController],
  providers: [LanguageMasterService],
})
export class LanguageMasterModule {}
