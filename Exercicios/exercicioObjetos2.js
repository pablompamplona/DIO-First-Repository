// 2) Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso/Math.pow(this.altura, 2);
    }
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'obeso';
    } else {
        return 'obesidade grave';
    };
}

const pablo = new Pessoa('Pablo', 88.0, 1.75);
console.log(pablo.calcularImc().toFixed(2));
console.log("Segundo o IMC, o " + pablo.nome + " esta " + classificarImc(pablo.calcularImc()));