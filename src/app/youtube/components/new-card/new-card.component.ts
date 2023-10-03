import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '~/auth/services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
})
export class NewCardComponent implements OnInit {
  public isSubmitted = false;
  public newCardForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.newCardForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', [Validators.maxLength(255)]],
      image: ['', [Validators.required, this.urlValidator]],
      videolink: ['', [Validators.required, this.urlValidator]],
      date: ['', [Validators.required, this.dateValidator]],
    });
  }

  get getTitle() {
    return this.newCardForm.get('title');
  }

  get getDescription() {
    return this.newCardForm.get('description');
  }

  get getImage() {
    return this.newCardForm.get('image');
  }

  get getVideolink() {
    return this.newCardForm.get('videolink');
  }

  get getDate() {
    return this.newCardForm.get('date');
  }

  urlValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value.length === 0) return null;
    return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gm.test(
      control.value,
    )
      ? null
      : { urlInvalid: true };
  }

  dateValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    return new Date(control.value).setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0)
      ? { dateInvalid: true }
      : null;
  }

  public onSubmit() {
    this.isSubmitted = true;
    if (this.newCardForm.invalid) return;
    this.router.navigate(['search']);
  }
}
