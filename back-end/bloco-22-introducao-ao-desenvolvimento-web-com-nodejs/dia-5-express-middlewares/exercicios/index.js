const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

/* Crie uma rota POST /sales que receba uma requisição que envie productName e infos no body da requisição, como na imagem abaixo.
01 - productName deve ser obrigatório e ter mais de 4 caracteres.
02 - Caso o campo productName não seja passado, deve ser retornado o código status 400 e um JSON com a mensagem 
    { "message": "O campo productName é obrigatório" } ;
03 - Caso o campo productName possua menos de 4 caracteres, deve ser retornado o código status 400 e um JSON com a mensagem 
    { "message": "O campo productName deve ter pelo menos 4 caracteres" };
04 - infos deve ser um objeto obrigatório contendo duas chaves: saleDate e warrantyPeriod;
05 - Caso o campo infos não seja passado, deve ser retornado o código status 400 e um JSON com a mensagem 
    { "message": "O campo infos é obrigatório" } ;
06 - saleDate deve conter uma data válida no padrão dd/mm/aaaa;
07 - Caso o campo saleDate não seja passado, deve ser retornado o código status 400 e um JSON com a mensagem 
    { "message": "O campo saleDate é obrigatório" } ;
08 - Caso o campo saleDate não seja uma data válida no formato dd/mm/aaaa, deve ser retornado o código status 400 e um JSON com a mensagem 
    { "message": "O campo saleDate não é uma data válida" } ;
09 - warrantyPeriod deve ser um número inteiro entre 1 e 3;
10 - Caso o campo warrantyPeriod não seja passado, deve ser retornado o código status 400 e um JSON com a mensagem 
    { "message": "O campo warrantyPeriod é obrigatório" } ;
11 - Caso o campo warrantyPeriod não seja um número entre 1 e 3, deve ser retornado o código status 400 e um JSON com a mensagem 
    { "message": "O campo warrantyPeriod precisa estar entre 1 e 3" } ;
12 - Caso todos os campos sejam válidos, deverá ser retornado uma resposta com o código de status 201 e um JSON contendo uma mensagem de sucesso 
    { "message": "Venda cadastrada com sucesso" };
*/

app.listen(3001, () => console.log('Aplicação rodando na porta 3001'));