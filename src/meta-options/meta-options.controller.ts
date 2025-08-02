import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostMetaoptionsDto } from './dtos/create-post-metaoption.dto';
import { MetaOptionsService } from './providers/meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(
    /**
     * Inject MetaoptionsService
     */
    private readonly metaOptionsService: MetaOptionsService,
  ) {}
  @Post()
  public create(@Body() createPostMetaOptionsDto: CreatePostMetaoptionsDto) {
    return this.metaOptionsService.createMetaoption(createPostMetaOptionsDto);
  }
}
