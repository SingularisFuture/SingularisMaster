import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('LXP Module APIs')
    .setVersion('1.0')
    .addTag('User APIs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const swaggerCustomOptions = {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  };
  SwaggerModule.setup('swagger', app, document, swaggerCustomOptions); //Swagger UI ('http://..../swagger#')

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
