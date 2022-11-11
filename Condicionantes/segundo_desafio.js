// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const precoGasolina = 4.99;
const precoEtanol = 3.99;
let combustível = 'etanol';
let consumoMedioVeiculo = 15;
let distanciaPercorrida = 230;

let litrosConsumidos = (distanciaPercorrida/consumoMedioVeiculo);

let gastoTotal;
if (combustível === 'gasolina') {
    gastoTotal = litrosConsumidos * precoGasolina;
} else if (combustível === 'etanol') {
    gastoTotal = litrosConsumidos * precoEtanol;
}

console.log(gastoTotal.toFixed(2));