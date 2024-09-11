/** 
 * @code 
 * Essa função será o dado que o jagador irá jogar.
 * 
*/
async function rollDice(){
  return Math.floor(Math.random()*6) + 1;
 };

module.exports={rollDice};