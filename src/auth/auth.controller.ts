import { Controller } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
  // Injecting AuthService
  constructor(private readonly authService: AuthService) {}
}
