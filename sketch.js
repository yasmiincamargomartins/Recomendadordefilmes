// Idade 14 anos:
// 1) Cinderela, romance
// 2) Bolt Supercão, ação
// 3) Scooby-doo, terror

// Idade 12 anos:
// 1) Transformers, ação
// 2) Coraline e o Mundo Secreto, terror
// 3) Como Eu Era Antes de Você, romance

// Idade Livre:
// 1) Enrolados, romance
// 2) A Casa Monstro, terror
// 3) Carros, ação

 let campoIdade;
 let campoAcao;
 let campoTerror;
 let campoRomance;
 let filme;
 
function setup() {
  createCanvas(600, 400);
 createElement('h1' , 'Recomendador de Filmes');
  createSpan("Idade :");
campoIdade = createInput("1");
createElement('h4' , 'Escolha somente um gênerọ:')
campoAcao = createCheckbox('Ação');
campoTerror = createCheckbox('Terror');
campoRomance = createCheckbox('Romance');
}

function draw() {
  background('white');
  textAlign(CENTER, CENTER);
  textSize(40);
  fill('#06A70C')
  
  let idade = campoIdade.value();
  let acao = campoAcao.checked();
  let terror = campoTerror.checked();
  let romance = campoRomance.checked();
      
  filme = geraRecomendacao(idade, acao, terror, romance);
  
text(filme, width/2, height/2);
}
function geraRecomendacao(idade, acao, terror, romance){

  if (idade >= 14){
    if(acao){
      return 'Bolt Supercão'
    }else if(terror){
      return 'Scooby-doo';
    }else if(romance){
      return 'Cinderela';
    }else{
      return 'Bolt Supercão';
    }
  }else if (idade >= 12){
    if(acao){
      return 'Transformers'
    }else if(terror){
      return 'Coraline e o Mundo Secreto';
    }else if(romance){
      return 'Como Eu Era Antes de Você';
    }else{
    return 'Transformers';
    }
    }else if(acao){
    return  'Carros';
    }else if(terror){
    return 'A Casa Monstro';
    }else if(romance){
      return 'Enrolados';
    }else{
      return 'Carros';
    }
}	  																							     
  
  
