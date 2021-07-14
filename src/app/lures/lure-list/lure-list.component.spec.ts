import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LureListComponent } from './lure-list.component';

describe('LureListComponent', () => {
  let component: LureListComponent;
  let fixture: ComponentFixture<LureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LureListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
