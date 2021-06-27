import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLureComponent } from './edit-lure.component';

describe('EditLureComponent', () => {
  let component: EditLureComponent;
  let fixture: ComponentFixture<EditLureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
