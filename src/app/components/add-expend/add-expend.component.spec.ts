import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpendComponent } from './add-expend.component';

describe('AddExpendComponent', () => {
  let component: AddExpendComponent;
  let fixture: ComponentFixture<AddExpendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddExpendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
