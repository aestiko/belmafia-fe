import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // если фронтенд будет на другом домене
  await app.listen(3000);
  console.log(`🚀 Server running at http://localhost:3000/graphql`);
}

bootstrap();
