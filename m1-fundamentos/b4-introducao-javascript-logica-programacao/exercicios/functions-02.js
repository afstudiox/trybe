function highValue(arrayValues){
  let highNumber=arrayValues[0];
  let highIndex;
  
  for (index in arrayValues){
    if (highNumber <= arrayValues[index]) {
      highNumber = arrayValues[index];
      highIndex = index;
    }
    // console.log(arrayValues);
  }
  return highIndex;
}

console.log(highValue([200, 33, 6, 7, 10, 11]));