import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { ContinentMasterController } from './continentMaster.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [LocationService],
  controllers: [ContinentMasterController],
})
export class LocationMasterModule {}
