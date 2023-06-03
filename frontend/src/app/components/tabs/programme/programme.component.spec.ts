import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeComponent } from './programme.component';

describe('ProgrammeComponent', () => {
  let component: ProgrammeComponent;
  let fixture: ComponentFixture<ProgrammeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammeComponent]
    });
    fixture = TestBed.createComponent(ProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
