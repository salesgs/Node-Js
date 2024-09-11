/**
 * @code  
 * Objetos que estarão envolvidos no código. Endereços de memóaria que irão trasportar dados.
 * 
 * */

const start = require("./modules/start/playRaceEngine");
const winner = require("./modules/winner/declareWinner");
const player1 = {
  NAME:'Mario',
  VELOCITY:4,
  MANOBRA:3,
  POWER:3 ,
  POINTS:0,
};const player2 = {
  NAME:'Luigi',
  VELOCITY:3,
  MANOBRA:4,
  POWER:4 ,
  POINTS:0 
};

/**
 * @IIEF funções imediatamente invocada
 */
(async function main(){
  console.log(`🏁🚦Corrida entre ${player1.NAME} e ${player2.NAME} começando... `);
 

  /**
  * @code 
  * Essa função recebe os dois corredores da corrida
  */
  await start.playRaceEngine(player1,player2); //await
 
  /** 
   * @code 
   * Essa função declara os vencedores
   * 
  */
  await winner.declareWinner(player1,player2);
})();
