import { AuthModule } from './../auth/auth.module';
import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './providers/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService], // Exporting UserService if needed in other modules
  imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([User])], // Importing TypeOrmModule with User entity
})
export class UsersModule {}
