import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import * as path from 'path';

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
  console.log(
    'entity pattern',
    path.join(__dirname, '/entities') + '/**/*entity{.ts,.js}',
  );

  const config: TypeOrmModuleOptions = {
    type: 'postgres',
    // name: 'main',
    host: getFromConfigServiceOrEnvDirectly('POSTGRES_HOST', configService),
    port: getFromConfigServiceOrEnvDirectly('POSTGRES_PORT', configService),
    username: getFromConfigServiceOrEnvDirectly('POSTGRES_USER', configService),
    password: getFromConfigServiceOrEnvDirectly(
      'POSTGRES_PASSWORD',
      configService,
    ),
    database: getFromConfigServiceOrEnvDirectly('POSTGRES_DB', configService),
    entities: [
      path.join(__dirname, '/../../entities') + '/**/*entity{.ts,.js}',
    ],
    synchronize: false,
    migrationsTableName: 'migrations_table',
    migrations: [path.join(__dirname, '/../../migrations') + '/*.ts'],
    cli: {
      migrationsDir: path.join(__dirname, '/../../migrations'),
    },
    logging: process.env.NODE_ENV === 'production' ? false : 'all',
  };

  console.log('my config', config);

  return config;
}

export default getTypeORMConfig(); // for cli command line
