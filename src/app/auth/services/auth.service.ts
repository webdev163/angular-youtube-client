import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth: boolean = false;

  constructor() {}

  public getAuth() {
    if (localStorage.getItem('login') && localStorage.getItem('login') === '1') {
      this.isAuth = true;
    }
  }

  public setAuth() {
    localStorage.setItem('login', '1');
    this.isAuth = true;
  }

  public clearAuth() {
    localStorage.removeItem('login');
    this.isAuth = false;
  }
}
