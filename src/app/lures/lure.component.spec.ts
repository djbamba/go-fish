import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LureComponent } from './lure.component';

describe('LureComponent', () => {
  let component: LureComponent;
  let fixture: ComponentFixture<LureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
