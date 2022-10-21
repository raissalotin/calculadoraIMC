function calculaIMC() {
  const peso = Number(document.getElementById("campo-peso").value);
  const altura = Number(document.getElementById("campo-altura").value);
  const resultado = peso / (altura * altura);
  document.getElementById("resultado-IMC").innerHTML = `resultado = ${resultado.toFixed(2)}`;
    let resposta; 

  if (resultado < 15.99) {
    resposta = `magreza grave </br>`;
  } else if (resultado >= 16 && resultado <= 16.99) {
    resposta = `Magreza moderada </br>`;
  } else if (resultado >= 17 && resultado <= 18.5) {
    resposta = `magreza moderada </br>`;
  } else if (resultado > 18.5 && resultado <= 24.9) {
    resposta = `saudavel </br>`;
  } else if (resultado >= 25 && resultado <= 29.9) {
    resposta = `sobrepeso </br>`;
  } else if (resultado >= 23 && resultado <= 34.9) {
    resposta = `obesidade grau 1 </br>`;
  } else if (resultado >= 35 && resultado <= 39.9) {
    resposta = `obesidade grau 2 </br>`;
  } else if (resultado >= 40) {
    resposta = `obesidade grau 3 </br>`;
  }
  document.getElementById("resultado-categoria").innerHTML = `${resposta}`;
}
