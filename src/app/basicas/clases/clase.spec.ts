import { Jugador } from './clase';

xdescribe('Pruebas de clase', ()=>{

    let jugador = new Jugador();

    beforeAll(()=>{
        // console.log('beforeAll');
    });
    beforeEach(()=>{
        // console.log('beforeEach');
        // jugador.hp = 100;
        jugador = new Jugador();
    });
    afterAll(()=>{
        // console.log('afterAll');
    });
    afterEach(()=>{
        // console.log('afterEach');
    });

    it('Debe de retornar 70 de hp, si recibe 30 de daño', ()=>{
        // const jugador = new Jugador();
        const hp = jugador.recibeDanio(30);
        expect(hp).toBe(70);
    });

    it('Debe de retornar 50 de hp, si recibe 50 de daño', ()=>{
        // const jugador = new Jugador();
        const hp = jugador.recibeDanio(50);
        expect(hp).toBe(50);
    });

    xit('Debe de retornar 0 de hp, si recibe 130 de daño', ()=>{
        // const jugador = new Jugador();
        const hp = jugador.recibeDanio(130);
        expect(hp).toBe(0);
    });
});