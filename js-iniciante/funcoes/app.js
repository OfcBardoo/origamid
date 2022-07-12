function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4); // 16
areaQuadrado(5); // 25
areaQuadrado(2); // 4

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

console.log(total);

function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

imc(69, 1.76);
console.log(imc(69, 1.76));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de Floresta";
  } else {
    return "Eu náo gosto de cores";
  }
}
addEventListener("click", function () {
  console.log("Clicou");
});

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(50));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

var profissao = "Designer";

function dados() {
  var nome = "Alan";
  var idade = 29;
  function outrosDados() {
    var endereco = "Minas Gerais";
    var idade = 30;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados());
