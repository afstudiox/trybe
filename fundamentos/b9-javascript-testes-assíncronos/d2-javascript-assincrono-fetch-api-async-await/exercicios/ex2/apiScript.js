// apiScript.js     
// const fetch = require('node-fetch');


const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  
  const access = {
    method: 'GET',
    headers: { 'Accept': 'gzip' }
  }

  const coins = await fetch(url,access)
  .then((response) => response.json())
  .then((data) = data.data)
  .catch((error) => error.toString());

  console.log(coins);
}

fetchCoins();

