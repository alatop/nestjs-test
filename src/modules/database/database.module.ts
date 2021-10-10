import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Student from 'src/entites/student.entity';
import { getTypeORMConfig } from 'src/modules/database/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        getTypeORMConfig(configService),
    }),
  ],
})
export class DatabaseModule {}
