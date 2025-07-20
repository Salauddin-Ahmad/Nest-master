import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService], // Exporting AuthService if needed in other modules
  imports: [forwardRef(() => UsersModule)], // Add any necessary imports here
})
export class AuthModule {}
