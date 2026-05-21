//Thomas F

let frutas = ["maçã", "banana", "laranja"];
console.log(frutas);

let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

let carros = ["Fusca", "Gol", "Palio"];
console.log(carros[0]);
console.log(carros[1]);

let cores = ["vermelho", "verde", "azul"];
cores[1] = "amarelo";
console.log(cores);

let animais = ["cachorro", "gato", "coelho", "hamster", "papagaio", "peixe", "tartaruga", "cobra", "leão", "tigre"];
console.log(animais.length);

let paises = ["Brasil", "Argentina", "Chile"];
paises.push("Uruguai");
console.log(paises);

let cidades = ["São Paulo", "Rio de Janeiro", "Belo Horizonte"];
cidades.pop();
console.log(cidades);

let coresPrimarias = ["vermelho", "verde"];
coresPrimarias.unshift("azul");
console.log(coresPrimarias);

let frutasCitrica = ["limão", "laranja", "tangerina"];
frutasCitrica.shift();
console.log(frutasCitrica);

let animaisDomesticos = ["cachorro", "gato", "hamster"];
for (let i = 0; i < animaisDomesticos.length; i++) {
    console.log(animaisDomesticos[i]);
}
