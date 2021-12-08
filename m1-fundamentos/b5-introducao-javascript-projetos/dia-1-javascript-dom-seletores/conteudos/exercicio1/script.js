let header = document.querySelector('#header-container');
header.style.backgroundColor='#00B069';

let background = document.querySelector('#container');
background.style.backgroundColor='#F3F3F3';
background.style.width='100%'

let footer = document.querySelector('#footer-container');
footer.style.backgroundColor='#003533';

let emergency = document.querySelector('.emergency-tasks');
emergency.style.backgroundColor='#FF9F84';

let noEmergency = document.querySelector('.no-emergency-tasks');
noEmergency.style.backgroundColor='#F9DB5E';

let titleEmergency = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < titleEmergency.length; index += 1){
  titleEmergency[index].style.backgroundColor='#A500F3';
}

let titleNoEmergency = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < titleNoEmergency.length; index += 1){
  titleNoEmergency[index].style.backgroundColor='#232525';
}
