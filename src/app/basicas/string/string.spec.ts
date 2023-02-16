import { mensaje } from './string';
// describe('Pruebas de strings');
// it('debe de retornar un string');

describe('Pruebas de strings', () => {
  it('Debe de retornar un string', () => {
    const respuesta = mensaje('luiggi');
    expect(typeof respuesta).toBe('string');
  });

  it('Debe de retornar una respuseta que contenga el nombre del usuario', () => {
    const nombre = 'luiggi';
    const respuesta = mensaje(nombre);
    expect(respuesta).toContain(nombre);
  });
});
