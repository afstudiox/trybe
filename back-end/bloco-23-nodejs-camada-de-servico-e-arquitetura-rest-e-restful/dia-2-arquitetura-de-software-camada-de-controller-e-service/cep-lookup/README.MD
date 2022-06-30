### **Agora, a prática**
#


🚀 Você vai desenvolver uma aplicação de busca de CEP, chamada `cep-lookup`. A aplicação fornecerá um serviço de busca e cadastro de CEPs em um banco de dados. Como bônus, em vez de cadastrar novos CEPs manualmente, a aplicação consultará uma API externa para obter os dados do CEP desejado.

Utilize o banco de dados MySQL e execute a seguinte query para criar o banco e a tabela:

```
CREATE DATABASE IF NOT EXISTS cep_lookup;

USE cep_lookup;

CREATE TABLE IF NOT EXISTS ceps (
  cep VARCHAR(8) NOT NULL,
  logradouro VARCHAR(50) NOT NULL,
  bairro VARCHAR(20) NOT NULL,
  localidade VARCHAR(20) NOT NULL,
  uf VARCHAR(2) NOT NULL,
  PRIMARY KEY (cep)
);`
```

## **Exercício 1**

- Crie uma nova API utilizando o express
    - A aplicação deve ser um pacote Node.js;
    - Dê ao pacote o nome de `cep-lookup`;
    - Utilize o express para gerenciar os endpoints da sua aplicação;
    - A aplicação deve ter a rota `GET /ping`, que retorna o status `200 OK` e o seguinte JSON:

[ ]

`{ "message": "pong!" }`

- A aplicação deve escutar na porta 3000;
- Deve ser possível iniciar a aplicação através do comando `npm start`.

### **Exercício 2**

- Crie o endpoint `GET /cep/:cep`
    - O endpoint deve receber, no parâmetro `:cep`, um número de CEP válido;
    - O CEP precisa conter 8 dígitos numéricos e pode ou não possuir traço;
        - 👀 **De olho na dica:** utilize o regex `^\d{5}-?\d{3}$` para validar o CEP;
    - Caso o CEP seja inválido, retorne o status `400 Bad Request` e o seguinte JSON:

Copiar

`{ "error": { "code": "invalidData", "message": "CEP inválido" } }`

- Caso o CEP seja válido, realize uma busca no banco de dados;
    - Caso o CEP não exista no banco de dados, retorne o status `404 Not Found` e o seguinte JSON:

Copiar

`{ "error": { "code": "notFound", "message": "CEP não encontrado" } }`

Copiar

`- Caso o CEP exista, retorne o status `200 OK` e os dados do CEP no seguinte formato:`

Copiar

`{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}`

### **Exercício 3**

- Crie o endpoint `POST /cep`
    - O endpoint deve receber a seguinte estrutura no corpo da requisição:

Copiar

`{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}`

- Todos os campos são obrigatórios;
- Utilize o `Joi` para realizar a validação. Em caso de erro, retorne o status `400 Bad Request`, com o seguinte JSON:

Copiar

`{ "error": { "code": "invalidData", "message": "<mensagem do Joi>" } }`

- O CEP deve ser composto por 9 dígitos **com** traço;
    - 👀 **De olho na dica:** utilize o seguinte regex para validar o CEP: `^\d{5}-?\d{3}$`
- Se o CEP já existir, retorne o status `409 Conflict` com o seguinte JSON:

Copiar

`{
  "error": { "code": "alreadyExists", "message": "CEP já existente" }
}`

- Se o CEP ainda não existir, armazene-o no banco de dados e retorne o status `201 Created` com os dados do novo CEP no seguinte formato:

Copiar

`{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}`