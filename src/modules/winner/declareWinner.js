async function declareWinner(character1 , character2) {
  console.log("Resultado final");
  console.log(`${character1.NAME}:${character1.POINTS} pontos(s)`);
  console.log(`${character2.NAME}:${character2.POINTS} pontos(s)`);

  if(character1.POINTS>character2.POINTS)
    console.log(`\n ${character1.NAME} venceu a corrida! Parabéns! 🏆`);
  else if(character2.POINTS>character1.POINTS)
    console.log(`\n ${character2.NAME} venceu a corrida! Parabéns! 🏆`);
  else 
    console.log("A corrida terminou em empate");
}
module.exports={declareWinner};