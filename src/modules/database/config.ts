import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import Student from '../../entities/student.entity';
import { config as dotenvConfig } from 'dotenv';

const dotenvValues = dotenvConfig().parsed;

function getFromConfigServiceOrEnvDirectly(
  optionName: string,
  configService: ConfigService | null = null,
) {
  return configService
    ? configService.get(optionName)
    : dotenvValues[optionName];
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
    migrations: ['migrations/*.ts'],
    cli: {
      migrationsDir: 'migrations',
    },
    // logging: ['error', 'query', 'warn'],
    logging: 'all',
    // logging: ['all'],
  };

  console.log('my config', config);

  return config;
}

export default getTypeORMConfig();
