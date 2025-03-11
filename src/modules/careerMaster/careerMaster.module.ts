import { Module } from '@nestjs/common';
import { GradeSystemMaster } from './gradeSystemMaster.controller';
import { CareerService } from './careerMaster.service';
import { JobRoleMasterController } from './jobRoleMaster.controller';
import { JobTypeMasterController } from './jobTypeMaster.controller';

@Module({
  controllers: [
    GradeSystemMaster,
    JobRoleMasterController,
    JobTypeMasterController,
  ],
  providers: [CareerService],
})
export class CareerModule {}
