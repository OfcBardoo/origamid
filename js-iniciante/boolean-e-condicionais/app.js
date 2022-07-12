// Verifique se a sua idade é maior que a de algum parente
// Dependendo do resultado coloque no consoloe 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 30;
var idadeEsposa = 31;

if (minhaIdade > idadeEsposa) {
  console.log("É maior");
} else if (minhaIdade === idadeEsposa) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; //&& retorna o último valor verdadeiro ou o primeiro falso
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Alan";
var idade = 31;
var possuiDoutorado = false;
var empregofuturo;
var dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregofuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("brasil tem mais habitantes");
} else {
  console.log("brasil tem menos habitantes");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  //Gato é diferente de gato, pula para o else
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
}
