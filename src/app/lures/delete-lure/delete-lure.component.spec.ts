import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLureComponent } from './delete-lure.component';

describe('DeleteLureComponent', () => {
  let component: DeleteLureComponent;
  let fixture: ComponentFixture<DeleteLureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
