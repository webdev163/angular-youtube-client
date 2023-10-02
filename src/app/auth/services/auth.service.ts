import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth$ = new BehaviorSubject<boolean>(false);

  public getAuth() {
    if (localStorage.getItem('login') && localStorage.getItem('login') === '1') {
      return this.isAuth$.next(true);
    }
  }

  public setAuth() {
    localStorage.setItem('login', '1');
    this.isAuth$.next(true);
  }

  public clearAuth() {
    localStorage.removeItem('login');
    this.isAuth$.next(false);
  }
}
