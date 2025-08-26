import { Body, Controller, Get, Param, Post, Redirect } from '@nestjs/common';
import { ShortenerService } from './shortener.service';
import { CreateShortenerDTO } from './dtos/create-shortener-dto';

@Controller()
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Post()
  async createShortenerURL(@Body() body: CreateShortenerDTO) {
    return this.shortenerService.createShortenerURL(body);
  }

  @Get(':shortUrl')
  @Redirect()
  async redirectToOriginalUrl(@Param('shortUrl') shortUrl: string) {
    const fullUrl = `${process.env.BASE_URL}/${shortUrl}`;
    const originalUrl = await this.shortenerService.redirectToOriginalUrl(fullUrl);
    return { url: originalUrl, statusCode: 302 };
  }
}
