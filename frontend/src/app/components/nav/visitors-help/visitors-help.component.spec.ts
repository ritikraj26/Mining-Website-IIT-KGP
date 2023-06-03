import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsHelpComponent } from './visitors-help.component';

describe('VisitorsHelpComponent', () => {
  let component: VisitorsHelpComponent;
  let fixture: ComponentFixture<VisitorsHelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorsHelpComponent]
    });
    fixture = TestBed.createComponent(VisitorsHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
