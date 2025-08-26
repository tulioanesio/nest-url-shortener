import { Module } from '@nestjs/common';
import { ShortenerController } from './shortener.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ShortenerService } from './shortener.service';

@Module({
  controllers: [ShortenerController],
  providers: [ShortenerService, PrismaService],
})
export class ShortenerModule {}
