function techList(tech,name) {
  //verifica se o tamanho é maior
  if (tech.length <= 0){
    return "Vazio!";
  }
  let arrayRetorno=[];
  let techObj = {};
  tech.sort();

  for (let indexTech of tech){
    techObj = {tech: indexTech, name: name};
      arrayRetorno.push(techObj);
    }
  return arrayRetorno;
}

console.log(techList(['React','Jest','HTML','CSS','JavaScript'],'Lucas'));

module.exports = techList;