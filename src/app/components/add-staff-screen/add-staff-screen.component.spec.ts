import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffScreenComponent } from './add-staff-screen.component';

describe('AddStaffScreenComponent', () => {
  let component: AddStaffScreenComponent;
  let fixture: ComponentFixture<AddStaffScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddStaffScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStaffScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
