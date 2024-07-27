import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiInterceptor } from './api/interceptors/api.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ApiInterceptor());
  await app.listen(3000);
}
bootstrap();
