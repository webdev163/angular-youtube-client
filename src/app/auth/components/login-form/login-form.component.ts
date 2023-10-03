import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '~/auth/services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public isSubmitted = false;
  public loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          this.passwordLengthValidator,
          this.passwordLetterCaseValidator,
          this.passwordLetterNumberValidator,
          this.passwordSpecialCharactersValidator,
        ],
      ],
    });
  }

  get getLogin() {
    return this.loginForm.get('login');
  }

  get getPassword() {
    return this.loginForm.get('password');
  }

  passwordLengthValidator(control: AbstractControl): ValidationErrors | null {
    return control.value.length < 8 ? { shortPassword: true } : null;
  }

  passwordLetterCaseValidator(control: AbstractControl): ValidationErrors | null {
    return /[a-z]/.test(control.value) && /[A-Z]/.test(control.value) ? null : { letterCaseInvalid: true };
  }

  passwordLetterNumberValidator(control: AbstractControl): ValidationErrors | null {
    return /[a-zA-Z]/.test(control.value) && /[0-9]/.test(control.value) ? null : { letterNumberInvalid: true };
  }

  passwordSpecialCharactersValidator(control: AbstractControl): ValidationErrors | null {
    return /[!@#?]/.test(control.value) ? null : { specialCharactersMissing: true };
  }

  public onSubmit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;
    this.authService.setAuth();
    this.router.navigate(['search']);
  }
}
