import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiInterceptor } from './api/interceptors/api.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NotFoundFilter } from './api/interceptors/notFound.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ApiInterceptor());
  const config = new DocumentBuilder()
    .setTitle('Basic API')
    .setDescription('Basic structure for Hexagonal Architecture')
    .setVersion('1.0')
    .addTag('Basic')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
