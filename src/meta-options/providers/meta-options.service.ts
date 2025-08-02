import { Metaoption } from 'src/meta-options/meta-option.entity';
import { Inject, Injectable } from '@nestjs/common';
import { MetaOptionsController } from '../meta-options.controller';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostMetaoptionsDto } from '../dtos/create-post-metaoption.dto';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(Metaoption)
    private readonly metaoptionRepository: Repository<Metaoption>,
  ) {
    console.log('hello');
  }

  public createMetaoption(createPostMetaoptionsDto: CreatePostMetaoptionsDto) {
    const metaOption = this.metaoptionRepository.create(
      createPostMetaoptionsDto,
    );
    return this.metaoptionRepository.save(metaOption);
  }
}
