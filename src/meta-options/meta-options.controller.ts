import { Body, Controller, Post } from '@nestjs/common';

import { MetaOptionsService } from './providers/meta-options.service';
import { CreatePostMetaOptionsDto } from './dtos/create-post-metaoption.dto';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(
    /**
     * Inject MetaoptionsService
     */
    private readonly metaOptionsService: MetaOptionsService,
  ) {}
  @Post()
  public create(@Body() createPostMetaOptionsDto: CreatePostMetaOptionsDto) {
    return this.metaOptionsService.createMetaoption(createPostMetaOptionsDto);
  }
}
