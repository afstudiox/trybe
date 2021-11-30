// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 1, 70, 8, 100, 2, 35, 27];

let high=0;
for (number of numbers){
  if (number > high){
    high = number;
  }
}

let min=high;
for (number of numbers){
  if (number < min){
    min = number;
  }
}


console.log("\nO menor valor contido no array é:", min);