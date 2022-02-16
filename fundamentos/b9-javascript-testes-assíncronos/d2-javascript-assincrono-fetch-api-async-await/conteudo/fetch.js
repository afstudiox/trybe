const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';
  // console.log(fetch(url));
  // com o código até aqui retorna apenas a promisse com o estado pending

  // controlando o fluxo assíncrono
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu Errado :( \n${error}`));
}

fetchJoke();