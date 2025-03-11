import { Module } from '@nestjs/common';
import { CategoryMasterController } from './categoryMaster.controller';
import { SubCategoryMasterController } from './subCategoryMaster.controller';
import { CategoryMasterService } from './categoryMaster.service';

@Module({
  controllers: [CategoryMasterController, SubCategoryMasterController],
  providers: [CategoryMasterService],
})
export class CategoryMasterModule {}
