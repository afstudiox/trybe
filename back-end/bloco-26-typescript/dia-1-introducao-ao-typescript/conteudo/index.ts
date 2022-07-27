import * as Exercise from './exercises';

console.log(Exercise.greeter('Miguel'));
console.log(Exercise.personAge('Miguel',12));
console.log(`A soma do array é igual a ${Exercise.sumArray([3,6,9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10,25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5,30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100,200)}cm²`);

console.log(`Quadrado de lado de 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado de 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado de 100cm: ${Exercise.square(100)}cm²`);

console.log(`Losangulo de diagonal maior de 32cm e menor de 18cm: ${Exercise.diamond(32,18)}cm²`);
console.log(`Losangulo de diagonal maior de 200cm e menor de 50cm: ${Exercise.diamond(200,50)}cm²`);
console.log(`Losangulo de diagonal maior de 75cm e menor de 25cm: ${Exercise.diamond(75,25)}cm²`);

console.log(`Trapézio de base maior de 100cm ,menor de 70cm e altura de 50cm : ${Exercise.trapeze(100,70,50)}cm²`);
console.log(`Trapézio de base maior de 75cm ,menor de 50cm e altura de 35cm : ${Exercise.trapeze(75,50,35)}cm²`);
console.log(`Trapézio de base maior de 150cm ,menor de 120cm e altura de 80cm : ${Exercise.trapeze(150,120,80)}cm²`);

console.log(`Cículo de raio de 25cm: ${Exercise.circle(25)}cm²`);
console.log(`Cículo de raio de 100cm: ${Exercise.circle(100)}cm²`);
console.log(`Cículo de raio de 12,5cm: ${Exercise.circle(12.5)}cm²`);
