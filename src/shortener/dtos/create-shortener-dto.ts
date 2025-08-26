import { IsNotEmpty, IsUrl } from 'class-validator';

export class CreateShortenerDTO {
  @IsUrl()
  @IsNotEmpty()
  originalUrl: string;
}
