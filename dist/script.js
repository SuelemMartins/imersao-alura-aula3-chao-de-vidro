ganhou = 0 // se for 1, perdeu. se for 0, ganhou 
for (let rodada = 1; rodada <= 3; rodada ++) {
  console.log("Rodada: " + rodada);
  escolhaJogador = prompt("Nivel " + rodada + ", escolha vidro (1,2 ou 3)?");
  pisoQuebrado = Math.floor(Math.random() * 3) + 1;
  if (escolhaJogador == pisoQuebrado) {
    // escolha o vidro que estava quebrado
    alert("Vidro quebrou! Acabou o jogo pra vence");
    rodada = 1000;
    ganhou = 1
  } else {
    alert("Passou! Pisso quebrado estava na ponte: " + pisoQuebrado);
  }
 
}
if (ganhou == 0) {
  alert("Você venceu! Parabens!");
}