import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeinfadeoutComponent } from './fadeinfadeout.component';

describe('FadeinfadeoutComponent', () => {
  let component: FadeinfadeoutComponent;
  let fixture: ComponentFixture<FadeinfadeoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FadeinfadeoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeinfadeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
