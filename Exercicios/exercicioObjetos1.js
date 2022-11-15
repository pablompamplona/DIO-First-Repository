// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

class Carro {
    marca;
    cor;
    consumoMedio;

    constructor(marca, cor, consumoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.consumoMedio = consumoMedio;
    }

    calcularGastoCombustivel(distancia, precoCombustivel) {
        return distancia/this.consumoMedio * precoCombustivel;
    }
}

const gol = new Carro('volkswagen', 'preto', 16);
console.log("O valor gasto na viagen foi R$" + gol.calcularGastoCombustivel(150, 4.5).toFixed(2));

