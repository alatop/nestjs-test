import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Student from 'src/entites/student.entity';
import { config } from 'rxjs';
import { Logger } from '@nestjs/common';

function getFromConfigServiceOrEnvDirectly(
  optionName: string,
  configService: ConfigService | null = null,
) {
  return configService
    ? configService.get(optionName)
    : process.env[optionName];
}

export function getTypeORMConfig(
  configService: ConfigService | null = null,
): TypeOrmModuleOptions {
  const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: getFromConfigServiceOrEnvDirectly('POSTGRES_HOST', configService),
    port: getFromConfigServiceOrEnvDirectly('POSTGRES_PORT', configService),
    username: getFromConfigServiceOrEnvDirectly('POSTGRES_USER', configService),
    password: getFromConfigServiceOrEnvDirectly(
      'POSTGRES_PASSWORD',
      configService,
    ),
    database: getFromConfigServiceOrEnvDirectly('POSTGRES_DB', configService),
    entities: [Student],
    synchronize: false,
    migrationsTableName: 'custom_migration_table',
    migrations: ['../../migration/*.js'],
    cli: {
      migrationsDir: 'migration',
    },
  };

  Logger.log('config', config);

  return config;
}

export default getTypeORMConfig();
