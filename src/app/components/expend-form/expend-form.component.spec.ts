import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpendFormComponent } from './expend-form.component';

describe('ExpendFormComponent', () => {
  let component: ExpendFormComponent;
  let fixture: ComponentFixture<ExpendFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpendFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpendFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
