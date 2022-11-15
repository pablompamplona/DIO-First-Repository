// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado

const numeros = [1, 3, 4, 6, 9, 11, 12, 14, 15, 17];

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0) {
        console.log('O número ' + numeros[i] + ' é par');
    }
    
}