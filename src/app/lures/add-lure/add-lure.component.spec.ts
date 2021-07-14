import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLureComponent } from './add-lure.component';

describe('AddLureComponent', () => {
  let component: AddLureComponent;
  let fixture: ComponentFixture<AddLureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
