import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  /*
   * The constructor is where we inject the AuthService.
   * This is a TypeScript shortcut that creates a private authService member and assigns it to the value of the parameter.
   */
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(
    @Body('email') email: string, 
    @Body('password') password: string
    ) {
    return this.authService.signup();
  }

  @Post('signin')
  login() {
    return this.authService.login();
  }
}
