//variáveis: var, let, const

var animal = "gato";
console.log(animal);

let nomeCompleto = "Fulano da Silva";
console.log(nomeCompleto);

var valor0 = 2;
const valor1 = 10;
console.log("O valor é: " + valor1);
valor0 = 3;

//por não ser constante, o valor 0 segue muda para 3, mas o valor 1 segue sendo 10.

//verificar tipo de variável
console.log(typeof valor0);

//impressao, console.log, template literal
console.log(`seja bem-vindo ${nomeCompleto}. Aproveite a estadia!`);

//algoritmo entrada + processamento + saída
var nome = window.prompt("Digite seu nome: ");
document.writeln(`seja bem-vindo ${nome}. Bem-vindo ao meu site!`);

//operadores aritméticos * / + - **
//operadores de comparação < > != == (=== !== estritamente igual e estritamente desigual)
console.log(5 == '5'); //olha apenas para valores
console.log(5 === '5'); //olha para tipo e valor (o primeiro 5 é num, o segundo 5 é string)

//criar um sistema que realiza a soma de dois numeros
//o usuario deve informar quais sao os numeros

var valorU0 = prompt("Digite um número racional: ");
var valorU1 = prompt("Digite outro número racional: ");

valorU0 = Number(valorU0);
valorU1 = Number(valorU1);

console.log(valorU0);
console.log(valorU1);

var valorU2 = valorU0 + valorU1;

console.log(typeof valorU0);
console.log(typeof valorU1);
console.log(typeof valorU2);

document.writeln(`A soma dos números digitados é ${valorU2}`);

//estrutura de console if-else

if (valorU2 >=18){
console.log("maior ou igual a 18");
}else{
    console.log("menor que 18");
}

//estrutura de repetição for, while e do-while

for (let i=0; i<10; i++){
    console.log("Iteração: " + i);
}

var i=0;

while(i<10){
    console.log("Iteração2: " + i);
    i++
}

//escolha-caso

var diaSemana=3;

switch (diaSemana){
case 1:
    console.log("domingo");
    break;
    case 2:
    console.log("segunda");
    break;
    case 3:
    console.log("terca");
    break;
    default:
        console.log("escolha uma opcao");
}