import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //APP GLOBAL PIPES and FILTER
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  //SWAGGER DOCS
  const config = new DocumentBuilder().setTitle('Sample API Open API Documentation').setVersion('1.0').addBearerAuth().build();

  const titleOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Sample API Documentation',
  };

    //CORS
    app.enableCors({
      origin: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    });
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, titleOptions);

  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
