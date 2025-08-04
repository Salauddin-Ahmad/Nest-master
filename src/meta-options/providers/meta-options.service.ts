import { MetaoptionEntity } from 'src/meta-options/meta-option.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-metaoption.dto';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaoptionEntity)
    private readonly metaoptionRepository: Repository<MetaoptionEntity>,
  ) {
    console.log('hello');
  }

  public createMetaoption(createPostMetaoptionsDto: CreatePostMetaOptionsDto) {
    const metaOption = this.metaoptionRepository.create(
      createPostMetaoptionsDto,
    );
    return this.metaoptionRepository.save(metaOption);
  }
}
