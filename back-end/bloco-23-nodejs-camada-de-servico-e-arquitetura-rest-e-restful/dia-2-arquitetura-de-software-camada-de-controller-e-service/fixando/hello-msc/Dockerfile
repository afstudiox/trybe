# usando uma imagem do node 
FROM node

# cria uma pasta onde fica o código
WORKDIR /app

# copia só o que precisa
# COPY ./src ./src
# COPY package*.json ./
COPY . .

# instala com segurança só as libs que não são de dev
RUN npm install

# permite a inserção de variáveis de ambiente 
ENV \ 
  APP_PORT=3000 \
  MYSQL_HOST=localhost \
  MYSQL_PORT=3306 \
  MYSQL_USER=root \
  MYSQL_PASSWORD=root

# roda a aplicação
CMD [ "node", "index.js" ]

# 