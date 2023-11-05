import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCatComponent } from './log-cat.component';

describe('LogCatComponent', () => {
  let component: LogCatComponent;
  let fixture: ComponentFixture<LogCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogCatComponent]
    });
    fixture = TestBed.createComponent(LogCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
