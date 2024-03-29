import { Module } from '@nestjs/common';
import { typeOrmAsyncConfig } from './infra/typeorm/database.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmAsyncConfig), CategoryModule],
})
export class AppModule {}
