import { incrementar } from './numeros';


describe('Pruebas de números', () => {
    it('Retorna 100, si el numero es mayor a 100', () => {
        const resp = incrementar(333);
        expect(resp).toBe(100);
    });

    it('Retorna el número más 1, si el número es menor o igual a 100', () => {
        const resp = incrementar(30);
        expect(resp).toBe(31);
    })
})