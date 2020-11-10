import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionStartedComponent } from './session-started.component';

describe('SessionStartedComponent', () => {
  let component: SessionStartedComponent;
  let fixture: ComponentFixture<SessionStartedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionStartedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
