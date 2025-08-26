import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateShortenerDTO {
  @IsUrl({}, { message: 'Por favor, forneça uma URL válida.' })
  @IsNotEmpty({ message: 'A URL não pode ser vazia.' })
  @IsString({ message: 'A URL deve ser uma string.' })
  originalUrl: string;
}
