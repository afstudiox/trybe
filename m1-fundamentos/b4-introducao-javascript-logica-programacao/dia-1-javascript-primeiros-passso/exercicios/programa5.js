const a = 0;
const b = 90;
const c = 90;

somaAngulo=a+b+c;

if (a <= 0 || b <= 0 || c <= 0){
    console.log("\nExistem angulos inválidos");
}else if (somaAngulo == 180){
    console.log("\nTrue");
}else{
    console.log("\nFalse");
}