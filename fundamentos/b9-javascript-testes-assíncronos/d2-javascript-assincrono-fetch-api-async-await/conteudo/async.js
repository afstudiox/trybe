const fetch = require('node-fetch');

// opção 1 usando then e catch
// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.value)
//     .catch((error) => `Algo deu Errado :( \n${error}`);

//   console.log(result);
// }

//opcao 2 usando try e catch
const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  
  try {
    const response = await fetch(url);
    const data = await response .json();
    console.log(data.value);
  }catch(error) {
    console.log(`Algo deu errado :( \n${error})`);
  }
}

fetchJoke();