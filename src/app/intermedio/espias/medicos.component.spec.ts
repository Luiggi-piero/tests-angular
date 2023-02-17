
import { EMPTY, from, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const medicoService = new MedicosService(null as any);

    beforeEach( () => {
        componente = new MedicosComponent(medicoService);
    });


    it('init: Debe de cargar los médicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];

        // Creación del espia
        spyOn(medicoService, 'getMedicos').and.callFake(() => {
            return from([medicos]);
        });

        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });


    it('Debe de llamar al servidor para agregar un médico', () => {

        // Creación del espia
        const espia = spyOn(medicoService, 'agregarMedico').and.callFake(() => EMPTY );

        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();
    });

    it('Debe agregar un nuevo medico al arreglo de médicos', () => {
        const medico = {id: 1, nombre: 'medico n'};

        spyOn(medicoService, 'agregarMedico').and.returnValue(from([medico]));

        componente.agregarMedico();

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Si falla el ingreso del médico, la propiedad mensajeError debe ser igual al error del servicio', () => {
        const miError = 'No se logró agregar el médico';

        spyOn(medicoService, 'agregarMedico').and.returnValue(throwError(() => miError));

        componente.agregarMedico();
        expect(componente.mensajeError).toBe(miError);
    });

    it('Debe de llamar al servidor para borrar un médico', () => {

        spyOn(window, 'confirm').and.returnValue(true);

        const espia = spyOn(medicoService, 'borrarMedico').and.callFake(() => EMPTY);
        componente.borrarMedico('3');
        expect(espia).toHaveBeenCalledWith('3');
    });

    it('NO debe de llamar al servidor para borrar un médico', () => {

        spyOn(window, 'confirm').and.returnValue(false);
        const espia = spyOn(medicoService, 'borrarMedico').and.callFake(() => EMPTY);

        componente.borrarMedico('3');
        expect(espia).not.toHaveBeenCalledWith('3');
    });
});
