import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TestController } from './controllers/test/test.controller';
import { DatabaseModule } from './modules/database/database.module';
import * as Joi from 'joi';
import { StudentsModule } from './modules/student/student.module';
import { PostgreModule } from './modules/postgre/postgre.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
    StudentsModule,
    PostgreModule,
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule {}
