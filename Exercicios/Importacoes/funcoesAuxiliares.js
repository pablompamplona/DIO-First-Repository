const entradas = [5, 50, 10, 98, 23]

function gets(i) {
    return entradas[i];
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print, entradas};