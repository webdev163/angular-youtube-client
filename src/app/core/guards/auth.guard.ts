import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '~/auth/services/auth.service';

export const authGuard: CanMatchFn = () => {
  const authService = inject(AuthService);
  authService.getAuth();

  return authService.isAuth;
};
