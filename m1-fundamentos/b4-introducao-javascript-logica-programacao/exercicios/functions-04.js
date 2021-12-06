function highWord(arrayValues){

  let highestNameSize=arrayValues[0].length;
  let highestName=arrayValues[0];
  
  for (index in arrayValues){
    if (highestNameSize <= arrayValues[index].length) {
      highestNameSize = arrayValues[index].length;
      highestName = arrayValues[index];
    }
  }
  return highestName;
}

console.log(highWord(['José', 'Zoroastrorem', 'Nádia', 'Fernanda', 'Gerturdes', 'Joana']));