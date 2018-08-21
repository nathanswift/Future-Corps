import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProgramOptionsComponent } from './student-program-options.component';

describe('StudentProgramOptionsComponent', () => {
  let component: StudentProgramOptionsComponent;
  let fixture: ComponentFixture<StudentProgramOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProgramOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProgramOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
