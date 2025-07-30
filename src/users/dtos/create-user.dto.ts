import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsNotEmpty,
  Matches,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(95)
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(95)
  lastName?: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(95)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(95)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, {
    message:
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long.',
  })
  password: string;
}
