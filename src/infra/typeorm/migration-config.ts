import { DataSource } from 'typeorm';
import { join } from 'path';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'postgres',
  entities: [__dirname + '/../../../**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [join(__dirname, '/migration/*.ts')],
  migrationsRun: true,
});
