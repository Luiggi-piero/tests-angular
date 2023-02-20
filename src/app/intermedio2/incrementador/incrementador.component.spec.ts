import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { IncrementadorComponent } from './incrementador.component';

describe('Incremendator Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('Debe de mostrar la leyenda', () => {
    component.leyenda = 'la leyenda';

    fixture.detectChanges(); // Disparar la deteccion de cambios
    const elem: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;

    expect(elem.innerHTML).toContain('la leyenda');
  });

  it('Debe de mostrar en el input el valor del progress', (done) => {
    component.cambiarValor(5);
    fixture.detectChanges();

    // Cuando termine la deteccion de cambios y
    // este lista para ser evaluada
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const elem: HTMLInputElement = input.nativeElement;

      expect(elem.value).toBe('55');

      done();
    });
  });

  it('Debe de incrementar/decrementar en 5 realizando click sobre el botón', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

    // Dispara el evento click
    botones[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);
    
    botones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  it('Debe cambiar el h3 luego de realizar el click sobre el boton decrementar/incrementar', (done) => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    const h3:HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    botones[0].triggerEventHandler('click', null);

    fixture.detectChanges();

    fixture.whenStable().then(()=>{

      expect(h3.innerHTML).toContain('45');
      done();
    });

    
  })
});
