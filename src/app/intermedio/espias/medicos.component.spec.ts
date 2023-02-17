
import { EMPTY, from } from 'rxjs';
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
});
