import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';

describe('Medico component', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    // Configuracion del tesbed
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule],
    });

    // Creación del componente para acceder al html y componentes del DOM
    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
  });

  it('Debe de crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de retornar el nombre del médico', () => {
    const nombre = 'Lucas';
    const mensaje = component.saludarMedico(nombre);

    expect(mensaje).toContain(nombre);
  });
});
