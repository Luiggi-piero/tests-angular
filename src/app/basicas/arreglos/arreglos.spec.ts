import { obtenerRobots } from './arreglos';

describe('Pruebas de arreglos', () => {
  it('Debe de retornar 3 elementos como mínimo', () => {
    const res = obtenerRobots();
    expect(res.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe de contener a Ultrón y Robocop', () => {
    const res = obtenerRobots();
    expect(res).toContain('Ultrón');
    expect(res).toContain('Robocop');
  });
});
