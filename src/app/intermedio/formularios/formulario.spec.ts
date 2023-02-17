import { FormularioRegister } from './formulario';


describe('Formularios', () => {

    let componente: FormularioRegister;

    beforeEach( () => componente = new FormularioRegister());

    it('Debe de crear un formulario con dos campos', () => {
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
    });

    it('El email debe ser obligatorio', () => {
        const control = componente.form.get('email');
        control?.setValue('');

        expect(control?.valid).toBeFalsy();
    });

    it('El email debe ser válido', () => {
        const control = componente.form.get('email');
        control?.setValue('asefas@gmail.com');

        expect(control?.valid).toBeTruthy();
    })

})