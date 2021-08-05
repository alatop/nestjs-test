import * as pg from 'pg';
import { Logger, Module, OnApplicationShutdown } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PostgreService } from 'src/servicies/postgre/postgre.service';
import { ModuleRef } from '@nestjs/core';
import { Pool as PgPool } from 'pg';

const { Pool } = pg;

const databasePoolFactory = async (configService: ConfigService) => {
  return new Pool({
    user: configService.get('POSTGRES_USER'),
    host: configService.get('POSTGRES_HOST'),
    database: configService.get('POSTGRES_DB'),
    password: configService.get('POSTGRES_PASSWORD'),
    port: configService.get('POSTGRES_PORT'),
  });
};

@Module({
  providers: [
    {
      provide: 'DATABASE_POOL',
      inject: [ConfigService],
      useFactory: databasePoolFactory,
    },
    PostgreService,
    ConfigService,
  ],
  exports: [PostgreService, 'DATABASE_POOL'],
})
export class PostgreModule implements OnApplicationShutdown {
  private readonly logger = new Logger(PostgreModule.name);

  constructor(private readonly moduleRef: ModuleRef) {}

  onApplicationShutdown(signal?: string): any {
    this.logger.log(`Shutting down on signal ${signal}`);
    const pool = this.moduleRef.get('DATABASE_POOL') as PgPool;
    return pool.end();
  }
}
