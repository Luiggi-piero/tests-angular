import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ HospitalComponent ]
    });

    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // para el ciclo de deteccion de cambios de angular
  });

  it('Debe de crear hospitalComponent', () => {
    expect(component).toBeTruthy();
  });
});
