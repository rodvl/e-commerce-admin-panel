import { ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: configService.get('DATABASE_HOST'),
      port: parseInt(configService.get('DATABASE_PORT')),
      username: configService.get('DATABASE_USERNAME'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_SCHEMA'),
      entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
      synchronize: false,
      migrations: [__dirname + '/migration/*.ts'],
      migrationsRun: false,
      autoLoadEntities: true,
    };
  },
};
