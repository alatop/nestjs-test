import { config as dotenvConfig } from 'dotenv';

// const dotenvValues = dotenvConfig().parsed;
dotenvConfig();
console.log('my config', process.env);

export {};
