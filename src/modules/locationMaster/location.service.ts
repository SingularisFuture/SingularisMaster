import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateContinentDto } from './dto/create-continent.dto';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllContinents() {
    return await this.prisma.continent_master.findMany();
  }

  async createContinents(createContinentDto: CreateContinentDto) {
    return await this.prisma.continent_master.create({
      data: createContinentDto,
    });
  }

  async updateContinents() {
    return await this.prisma.continent_master.findMany();
  }

  async deleteContinents(id: string) {
    return await this.prisma.continent_master.update({
      where: { id },
      data: { remove: true },
    });
  }
}
