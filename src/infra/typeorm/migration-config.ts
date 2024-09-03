import { DataSource } from 'typeorm';
import { join } from 'path';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'ep-polished-cherry-a41yxdta-pooler.us-east-1.aws.neon.tech',
  port: 5432,
  username: 'default',
  password: 'P1ElNA9OHBna',
  database: 'verceldb',
  entities: [__dirname + '/../../../**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [join(__dirname, '/migration/*.ts')],
  migrationsRun: true,
  ssl: true,
});
