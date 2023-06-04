import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerFacultyComponent } from './former-faculty.component';

describe('FormerFacultyComponent', () => {
  let component: FormerFacultyComponent;
  let fixture: ComponentFixture<FormerFacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormerFacultyComponent]
    });
    fixture = TestBed.createComponent(FormerFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
