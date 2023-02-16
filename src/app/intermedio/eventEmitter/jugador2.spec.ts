import { Jugador2 } from './jugador2';

describe('Jugador2 emit', () => {
  let jugador2: Jugador2;

  beforeEach(() => jugador2 = new Jugador2());

  it('Debe emitir un evento cuando el jugador reciba daño y sobrevivir si el daño es menor a 100', () => {
    let nuevoHp = 0;

    jugador2.hpCammbia.subscribe((hp) => nuevoHp = hp);

    jugador2.recibeDanio(10);

    expect(nuevoHp).toBe(90);
  });
});
