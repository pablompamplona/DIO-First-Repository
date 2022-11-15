// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['pablo', 'valdirene', 'joao', 'victor', 'matheus'];

for (let i = 0; i < nomes.length; i++) {
    if(nomes[i].charAt(0) === 'v') {
        console.log(nomes[i])
    }
    
}