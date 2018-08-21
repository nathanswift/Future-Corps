import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentServicesComponent } from './student-services.component';

describe('StudentServicesComponent', () => {
  let component: StudentServicesComponent;
  let fixture: ComponentFixture<StudentServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
