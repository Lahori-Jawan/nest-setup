import * as dotenv from 'dotenv';
import { join } from 'path';

const result = dotenv.config();

if (result.error) {
  console.log('Error while loading .env file @ ormconfig.ts');
  /* do nothing */
}

export const isProd = process.env.NODE_ENV === 'production';
console.log('environment', process.env.NODE_ENV, {isProd});

export const ormConfig = {
  type: 'postgres' as 'postgres',
  url: process.env.DB_URL,
  autoLoadEntities: true,
  synchronize: true
};
