import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoItemPageComponent } from './video-item-page.component';

describe('VideoItemPageComponent', () => {
  let component: VideoItemPageComponent;
  let fixture: ComponentFixture<VideoItemPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoItemPageComponent]
    });
    fixture = TestBed.createComponent(VideoItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
