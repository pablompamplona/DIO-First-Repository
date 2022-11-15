
const { gets, print, entradas} = require('./funcoesAuxiliares');

let maiorValor = 0;

for (let i = 0; i < entradas.length; i++) {
    if(gets(i) > maiorValor) {
        maiorValor = gets(i);
    }  
}

print(maiorValor);

