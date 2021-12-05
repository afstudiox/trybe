function checkPalindrome(text){
 
  let splitText;
  let reverseText;
  let copyText;

  splitText = text.split('');
  copyText = splitText.slice();
  reverseText = splitText.reverse();

  console.log(splitText);
  console.log(copyText);
  
  if (copyText === splitText){
    return true;
  }else{
    return false;
  } 
}

console.log(checkPalindrome('desenvolvimento'));