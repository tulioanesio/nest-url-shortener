import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateShortenerDTO } from './dtos/create-shortener-dto';
import { nanoid } from 'nanoid';

@Injectable()
export class ShortenerService {
  constructor(private prismaService: PrismaService) {}

  async createShortenerURL(data: CreateShortenerDTO) {
    const shortCode = nanoid(10);
    return this.prismaService.shortener.create({
      data: {
        originalUrl: data.originalUrl,
        shortUrl: `${process.env.BASE_URL}/${shortCode}`,
      },
    });
  }

  async redirectToOriginalUrl(shortUrl: string) {
    const shortener = await this.prismaService.shortener.findUnique({
      where: { shortUrl },
    });
    if (!shortener) throw new Error('Short URL not found');
    return shortener.originalUrl;
  }
}
