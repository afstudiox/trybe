// colorindo cor de fundo 
const backGround = document.querySelectorAll('#background li');
for (index of backGround){
  console.log(index);
  backGround.style.backgroundColor=index;
}