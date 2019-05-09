import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutipointsComponent } from './nutipoints.component';

describe('NutipointsComponent', () => {
  let component: NutipointsComponent;
  let fixture: ComponentFixture<NutipointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutipointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutipointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
