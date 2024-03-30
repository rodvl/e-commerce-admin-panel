import { Module } from '@nestjs/common';
import { typeOrmAsyncConfig } from './infra/typeorm/database.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './modules/category/category.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { ImageModule } from './modules/image/image.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: false,
      load: [configuration],
    }),
    CategoryModule,
    ImageModule,
  ],
})
export class AppModule {}
