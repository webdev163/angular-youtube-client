import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '~/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public login: string = '';
  public password: string = '';

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
