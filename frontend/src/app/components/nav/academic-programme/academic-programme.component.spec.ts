import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicProgrammeComponent } from './academic-programme.component';

describe('AcademicProgrammeComponent', () => {
  let component: AcademicProgrammeComponent;
  let fixture: ComponentFixture<AcademicProgrammeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicProgrammeComponent]
    });
    fixture = TestBed.createComponent(AcademicProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
