// numeros
var idade = 28;
var gols = 1000;
var pi = 3.14; //ponto para decimal
var exp = 2e10; //20000000000 (2 seguido de 10 zeros)

// precisão de até 15 digitos, depois o js arredonda

// operadores
var soma = 100 + 50; //150
var subtracao = 1000 - 50; //50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; //4 (o numero inteiro da divisao não exata = 14/5 = 10/5=2 = (4))

// operadores aritimeticos (strings)

var somaNnova = "100" + 50; //10050 (a soma de string é uma concatenação)

//(é possível fazer o calculo desde que ele consiga converter a string para numero)
var subtracaoNova = "100" - 50; //50
var multiplicacaoNova = "100" * 2; //200
var divisaoNova = "10" / 2; //5
var divisaoNovaNew = "Compre 10" / 2; //NaN (Not a Number)

//para verificar se uma variável é uma NaN ou não, usa a função [isNaN()]
var testeNaN = "isso é 100" / 2;
console.log(isNaN(testeNaN));

var numero = 80;
var unidade = "kg";
var peso = numero + unidade; //'80kg'
var pesoPorDois = peso / 2; //NaN

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20; //35
console.log(total);

// Crie duas expressões que retornem NaN
var sub = "1 laranja" - 10;
var mul = "maça 2" * 3;
console.log(sub, mul);

// Somar a string '200' com o numero 50 e retornar 250
var valor = +"200";
var somaNew = 50;
var totalValor = valor + somaNew;
console.log(totalValor);

// Incremente o número 5 e retorne o seu valor incrementado
var cinco = 5;
console.log(++cinco);

// Como dividir o peso por 2?
/*var numeroNew = "80";
var unidadeNew = "Kg";
var pesoNew = numeroNew + unidadeNew; //80Kg
var pesoPorDoisNew = pesoNew / 2; //NaN */

var numeroNew = +"80" / 2;
var unidadeNew = "Kg";
var pesoNew = numeroNew + unidadeNew;

console.log(pesoNew);
