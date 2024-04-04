function potencia(base, expoente) {
    return Math.pow(base, expoente);
}

function maiorValor(a, b) {
    return Math.max(a, b);
}

function menorValor(a, b) {
    return Math.min(a, b);
}

function raizQuadrada(numero) {
    return Math.sqrt(numero);
}

module.exports = {
    potencia,
    maiorValor,
    menorValor,
    raizQuadrada
};
