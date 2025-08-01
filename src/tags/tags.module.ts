import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from './tags.entity';

@Module({
  controllers: [TagsController],
  imports: [TypeOrmModule.forFeature([TagEntity])], // Assuming TagEntity is defined in the same module
})
export class TagsModule {}
