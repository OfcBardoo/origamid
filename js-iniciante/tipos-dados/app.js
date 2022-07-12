// tipos de dados
var nome = "Alan"; //string
var idade = 30; //number
var possoiFaculdade = true; //boolean
var time; //undefined
var comida = null; //null
var simbolo = Symbol(); //symbol
var novoObjeto = {}; //object

console.log(nome, idade, possoiFaculdade);

// verificar que tipo de dado uma variavel é
var nome = "Alan";
console.log(typeof nome);

//concatenando uma ou mais strings
var name = "Alan";
var lasName = "Araújo";
var nameComplete = name + " " + lasName;

console.log(nameComplete);

//aspas em string
('JavaScript é "super" fácil');
("JavaScript é 'super' fácil");
('JavaScript é "super" fácil');
('JavaScript é "super" "fácil"');

//template strings
var gols = 1000;
var frase = `Romário fez ${gols * 2} gols`;

console.log(frase);

//declare uma variável contenbdo uma string
var texto = "texto";

//declare uma variável contendo um numero dentro de uma string
var numeroTexto = "30";

//declare uma variável com a sua idade
var idade = 30;

//declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as duas
var nome = "Alan";
var sobrenome = "Alves Araújo";
// var nomeCompleto = nome + " " + sobrenome;
var nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

//coloque a seguinte frase em uma variável: It's a time
// var fraseExercicio = "It/'s Time";
var fraseExercicio = `It's time`;
console.log(fraseExercicio);

//verifique o tipo de varíavel qye contém o seu nome
var verificarTipoNome = typeof nome;
console.log(verificarTipoNome);
