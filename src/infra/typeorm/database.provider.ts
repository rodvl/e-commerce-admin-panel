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
      host: configService.get('database.host'),
      port: parseInt(configService.get('database.port')),
      username: configService.get('database.username'),
      password: configService.get('database.password'),
      database: configService.get('database.database'),
      entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
      synchronize: false,
      migrations: [__dirname + '/migration/*.ts'],
      migrationsRun: false,
      autoLoadEntities: true,
    };
  },
};
