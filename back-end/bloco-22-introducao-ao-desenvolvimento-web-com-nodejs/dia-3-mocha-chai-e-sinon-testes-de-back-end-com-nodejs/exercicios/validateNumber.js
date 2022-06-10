const validateNumber = (number) => {
  try {
    if (number > 0) {
      return "positivo"
    } else if ( number <0 ) {
      return "negativo"
    } else {
      return "neutro"
    }
  } catch (erro){
    return erro
  }
}

module.exports = validateNumber;