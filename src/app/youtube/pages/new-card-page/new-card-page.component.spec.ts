import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardPageComponent } from './new-card-page.component';

describe('NewCardPageComponent', () => {
  let component: NewCardPageComponent;
  let fixture: ComponentFixture<NewCardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCardPageComponent]
    });
    fixture = TestBed.createComponent(NewCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
