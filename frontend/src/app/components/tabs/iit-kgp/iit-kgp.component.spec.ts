import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IitKgpComponent } from './iit-kgp.component';

describe('IitKgpComponent', () => {
  let component: IitKgpComponent;
  let fixture: ComponentFixture<IitKgpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IitKgpComponent]
    });
    fixture = TestBed.createComponent(IitKgpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
