const { potencia, maiorValor, menorValor, raizQuadrada } = require('../index');

describe('Testes da Calculadora', () => {
    it('Deve retornar a potência', () => {
        const esperado = 100;
        const retornado = potencia(10, 2);
        expect(retornado).toBe(esperado);
    });

    it('Deve retornar o maior valor', () => {
        const esperado = 10;
        const retornado = maiorValor(10, 2);
        expect(retornado).toBe(esperado);
    });

    it('Deve retornar o menor valor', () => {
        const esperado = 2;
        const retornado = menorValor(10, 2);
        expect(retornado).toBe(esperado);
    });

    it('Deve retornar a raiz quadrada', () => {
        const esperado = 3;
        const retornado = raizQuadrada(9);
        expect(retornado).toBe(esperado);
    });
});
