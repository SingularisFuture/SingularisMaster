import {
  Controller,
  Get,
  Patch,
  Post,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateContinentDto } from './dto/create-continent.dto';
import { ApiCreatedResponse, ApiParam } from '@nestjs/swagger';

@Controller('continent-master')
export class ContinentMasterController {
  constructor(private readonly location: LocationService) {}

  @Get()
  async findAll(): Promise<any> {
    return await this.location.findAllContinents();
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The continent has been successfully created',
    type: CreateContinentDto,
  })
  async create(@Body() createContinentDto: CreateContinentDto) {
    return await this.location.createContinents(createContinentDto);
  }

  @Patch()
  async update(): Promise<any> {
    return await this.location.updateContinents();
  }

  @Delete(':id')
  @ApiParam({ name: 'id', description: 'Continent ID' })
  async delete(@Param('id') id: string): Promise<CreateContinentDto> {
    const res: any = await this.location.deleteContinents(id);
    return res;
  }
}
