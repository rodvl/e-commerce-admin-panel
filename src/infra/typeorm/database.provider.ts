import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
      synchronize: false,
      migrations: [__dirname + '/migration/*.ts'],
      migrationsRun: false,
      autoLoadEntities: true,
    };
  },
};
