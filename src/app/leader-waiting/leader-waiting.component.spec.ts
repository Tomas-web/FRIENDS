import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderWaitingComponent } from './leader-waiting.component';

describe('LeaderWaitingComponent', () => {
  let component: LeaderWaitingComponent;
  let fixture: ComponentFixture<LeaderWaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderWaitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
