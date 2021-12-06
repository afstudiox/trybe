function minValue(arrayValues){

  let minNumber=arrayValues[0];
  let minIndex;
  
  for (index in arrayValues){
    if (minNumber >= arrayValues[index]) {
      minNumber = arrayValues[index];
      minIndex = index;
    }
  }
  return minIndex;


}

console.log(minValue([2, 33, 6, 7, 1, 11]));