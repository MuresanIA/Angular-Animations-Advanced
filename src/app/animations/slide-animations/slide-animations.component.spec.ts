import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideAnimationsComponent } from './slide-animations.component';

describe('SlideAnimationsComponent', () => {
  let component: SlideAnimationsComponent;
  let fixture: ComponentFixture<SlideAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideAnimationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
