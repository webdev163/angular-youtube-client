import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '~/auth/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  public login = '';
  public password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public onSubmit(e: Event) {
    e.preventDefault();
    if (!this.login || !this.password) return;
    this.authService.setAuth();
    this.router.navigate(['search']);
  }
}
