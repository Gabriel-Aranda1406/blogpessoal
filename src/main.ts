import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00'; //Ajuste de fuso horário pro Brasil

  app.useGlobalPipes(new ValidationPipe()); //U

  app.enableCors(); //Essencial pro Front-End funcionar,serve para aceitar requisições de outras origens, não apenas do próprio servidor onde está.No mundo empresarial, se coloca o endereço nos parenteses para limitar o acesso.

  await app.listen(4000);
}
bootstrap();
