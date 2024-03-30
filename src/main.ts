import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('E-commerce-panel')
    .setDescription('Base Api')
    .setVersion('0.1')
    // .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger-ui', app, document, {});
  await app.listen(3000);
}
bootstrap().then(() => console.log('Service listening 👍: ', 3000));
