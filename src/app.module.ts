import { Module } from '@nestjs/common';
import { typeOrmAsyncConfig } from './infra/typeorm/database.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ConfigModule.forRoot({ isGlobal: true, ignoreEnvFile: false }),
    CategoryModule,
  ],
})
export class AppModule {}
