import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '~/auth/services/auth.service';

export const authGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  authService.getAuth();

  return authService.isAuth;
};
