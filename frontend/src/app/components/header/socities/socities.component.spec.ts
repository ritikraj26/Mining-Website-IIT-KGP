import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocitiesComponent } from './socities.component';

describe('SocitiesComponent', () => {
  let component: SocitiesComponent;
  let fixture: ComponentFixture<SocitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocitiesComponent]
    });
    fixture = TestBed.createComponent(SocitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
