import { Module } from '@nestjs/common';
import { MetaOptionsController } from './meta-options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metaoption } from './meta-option.entity';

@Module({
  controllers: [MetaOptionsController],
  imports: [TypeOrmModule.forFeature([Metaoption])],
})
export class MetaOptionsModule {}
