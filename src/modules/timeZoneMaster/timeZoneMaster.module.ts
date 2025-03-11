import { Module } from '@nestjs/common';
import { TimeZoneCountryMapController } from './timeZoneCountryMap.controller';

@Module({
  controllers: [TimeZoneCountryMapController],
})
export class TimeZoneMasterModule {}
