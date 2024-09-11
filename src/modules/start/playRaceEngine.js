const log = require("../log/logRollResult")
const getBlock = require("../random/getRandomBlock");
const dice = require("../dice/rollDice");

async function playRaceEngine(character1,character2){
  for(let round = 1;round <=5 ; round++){
    console.log(`🏁 Rodada ${round}`);
    
    //sortear bloco de pista
    let block = await getBlock.getRandomBlock(); //bloco a ser jogado

    console.log(`Bloco: ${block}`);
    
    //rolar os dados
    let diceResult1 = await dice.rollDice();
    let diceResult2 = await dice.rollDice();
  
    //teste de habilidade
    let totalTestSkill1=0;
    let totalTestSkill2=0;

    if(block==="RETA"){
      totalTestSkill1 = diceResult1 + character1.VELOCITY;
      totalTestSkill2 = diceResult2 + character2.VELOCITY;
      await log.logRollResult(character1.NAME,"velocidade",diceResult1,character1.VELOCITY);
      await log.logRollResult(character2.NAME,"velocidade",diceResult2,character2.VELOCITY);
    }
    if(block==="CURVA"){
      totalTestSkill1 = diceResult1 + character1.MANOBRA;
      totalTestSkill2 = diceResult2 + character2.MANOBRA;
      await log.logRollResult(character1.NAME,"manobra",diceResult1,character1.MANOBRA);
      await log.logRollResult(character2.NAME,"manobra",diceResult2,character2.MANOBRA);
    };

    if(block==="CONFRONTO"){
      let powerResult1 = diceResult1 + character1.POWER; 
      let powerResult2 = diceResult2 + character2.POWER; 
      
      console.log(`${character1.NAME} confrontou com  ${character2.NAME}🥊`);
      await log.logRollResult(character1.NAME,"confronto",diceResult1,character1.POWER);
      await log.logRollResult(character2.NAME,"confronto",diceResult2,character2.POWER);
       
      //Checando quem ganhou o confronto
      if(powerResult1>powerResult2 && character2.POINTS>0){
        console.log(`${character1.NAME} venceu o confronto! ${character2.NAME} perdeu 1 ponto 🐢`);
        character2.POINTS--;      
      }
      
      if(powerResult2>powerResult1  && character1.POINTS>0){
        console.log(`${character2.NAME} venceu o confronto! ${character1.NAME} perdeu 1 ponto 🐢`);    
        
        character1.POINTS--;      
      
      }  
     
      console.log(powerResult1 === powerResult2 ? "confronto empatado! Nenhum ponto foi perdido":"");
      
    };
    
    //Verificando o vencedor da partida
    if(totalTestSkill1>totalTestSkill2){
      console.log(`${character1.NAME} marcou um ponto !`);
      character1.POINTS++;
    }else if(totalTestSkill2>totalTestSkill1){
      console.log(`${character2.NAME} marcou um ponto !`);
      character2.POINTS++;
    }

    console.log("________________________");

  };
  
};
module.exports={playRaceEngine}