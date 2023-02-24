import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';

class FakeRouter {
  navigate(params: any) {}
}

class FakeActivatedRoute {
  // params: Observable<any> = EMPTY;
  private subject = new Subject;

  push(valor: any){
    this.subject.next(valor);
  }

  get params(){
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redirigir a médico cuando se guarde', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(['medico', '333']);
  });

  it('Debe de asignar al id el valor de nuevo, verificando parámetros de la ruta', () => {
    const activatedRoute = TestBed.inject(ActivatedRoute);
    // Casteo del valor a any y luego casteo a FakeActivatedRoute
    (<FakeActivatedRoute>(<any>activatedRoute)).push({id:'nuevo'});
    expect(component.id).toBe('nuevo');
  });
});
