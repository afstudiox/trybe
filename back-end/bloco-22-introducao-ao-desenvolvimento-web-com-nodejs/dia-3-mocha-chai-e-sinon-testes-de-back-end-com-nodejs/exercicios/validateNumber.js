const validateNumber = (number) => {
    if (typeof number !== 'number') {
      return "o parâmetro deve ser um número";
    }
  
    if (number > 0) {
      return "positivo";
    }
    
    if ( number <0 ) {
      return "negativo";
    } 

    return "neutro";
}

module.exports = validateNumber;