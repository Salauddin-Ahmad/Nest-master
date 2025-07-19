import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './providers/user.service';

@Module({
  controllers: [UsersController],
  providers: [UserService],
  exports: [UserService], // Exporting UserService if needed in other modules
})
export class UsersModule {}
