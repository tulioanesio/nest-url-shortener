import { Module } from '@nestjs/common';
import { ShortenerService } from './shortener/shortener.service';
import { ShortenerModule } from './shortener/shortener.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [ShortenerModule],
  controllers: [],
  providers: [ShortenerService, PrismaService],
})
export class AppModule {}
