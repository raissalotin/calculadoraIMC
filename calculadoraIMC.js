function calculaIMC() {
    const nome = document.getElementById("campo-nome").value;
   
    const peso = Number(document.getElementById("campo-peso").value);
    const altura = Number(document.getElementById("campo-altura").value);
   
    const resultado = peso / (altura * altura);
  
    document.getElementById("resultado-IMC").innerHTML = `Seu nome é ${nome} e seu indice de massa corporal é de ${resultado.toFixed()}`;
   
    let resposta;
    let classe;
  if (resultado < 15.99) {
      resposta = `magreza grave </br>`;
      classe = 'perigo';
  } else if (resultado >= 16 && resultado <= 16.99) {
      resposta = `Magreza moderada </br>`;
      classe = 'alerta'
  
  } else if (resultado >= 17 && resultado <= 18.5) {
      resposta = `magreza moderada </br>`;
      classe = 'cuidado'
  
  } else if (resultado > 18.5 && resultado <= 24.9) {
      resposta = `peso saudavel </br>`;
      classe = 'ideal'
 
  } else if (resultado >= 25 && resultado <= 29.9) {
      resposta = `sobrepeso </br>`;
      classe = 'moderado'
 
  } else if (resultado >= 23 && resultado <= 34.9) {
      resposta = `obesidade grau 1 </br>`;
      classe = 'cuidado'
 
  } else if (resultado >= 35 && resultado <= 39.9) {
      resposta = `obesidade grau 2 (severa) </br>`;
      classe = 'alerta'
  
  } else if (resultado >= 40) {
      resposta = `obesidade grau 3 (mórbida) </br>`;
      classe = 'perigo'
  }
    document.getElementById("resultado-categoria").innerHTML = ` Voce está com o indice de ${resposta}`;
    document.getElementById("resultado-categoria").className = classe;
}
