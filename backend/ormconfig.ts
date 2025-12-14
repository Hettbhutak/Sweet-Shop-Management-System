import { ConnectionOptions } from 'typeorm';
import { User } from './src/models/User';
import { Sweet } from './src/models/Sweet';
import dotenv from 'dotenv';
dotenv.config();

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'sweetshop',
  entities: [User, Sweet],
  synchronize: true,
};

export = config;
