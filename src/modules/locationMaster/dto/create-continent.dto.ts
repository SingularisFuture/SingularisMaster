// src/continents/dto/create-continent.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsString } from 'class-validator';

export class CreateContinentDto {
  @ApiProperty({
    description: 'The name of the continent',
    example: 'Asia',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Unique code for the continent',
    example: 'AS',
  })
  @IsString()
  code: string;

  @ApiProperty({
    description: 'Array of alias names for the continent',
    example: ['Oriental Continent', 'Eurasian Landmass'],
    type: String,
    isArray: true,
  })
  @IsArray()
  @IsString({ each: true })
  alias_name: string[];

  @ApiProperty({
    description: 'Flag indicating whether the continent should be removed',
    example: false,
  })
  @IsBoolean()
  remove: boolean;
}
