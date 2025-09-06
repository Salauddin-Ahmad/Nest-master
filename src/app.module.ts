import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostController } from './post/post.controller';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './users/user.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { SentryGlobalFilter, SentryModule } from '@sentry/nestjs/setup';
import { APP_FILTER } from '@nestjs/core';
@Module({
  // /d/Projects/nest-master >> for getting the sql into a file
  //  pg_dump -U postgres -h localhost -d Nest-master -F c -b -v -f schema.sql

  imports: [
    SentryModule.forRoot(),
    UsersModule,
    PostModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        // entities: [User],
        autoLoadEntities: true,
        synchronize: true,
        port: 5432,
        username: 'postgres',
        password: 'asdsasds34@',
        host: '127.0.0.1',
        database: 'Nest-master',
      }),
    }),
    TagsModule,
    MetaOptionsModule,
  ],
  controllers: [AppController, PostController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: SentryGlobalFilter,
    },
  ],
})
export class AppModule {}
