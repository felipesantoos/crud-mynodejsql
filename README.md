# MyNodejSQL

Um CRUD feito com Node.js e MySQL.

# Objetivo

- Criar um servidor local com Node.js que permita o cadastro, listagem (geral e individual), atualização e remoção de clientes de um banco de dados criado com o SGBD MySQL.

# Tarefas
- [x] Criar esquema do banco de dados;
- [x] Criar projeto em Node.js;
- [x] Realizar a conexão com o banco de dados;
- [x] Criar as rotas de cadastro, listagem (geral e individual), atualização e remoção;
- [ ] Criar as funções de cadastro, listagem (geral e individual), atualização e remoção;

# Como rodar este projeto
1. Clone o repositório com o comando `git clone https://github.com/felipesantosds/crud-mynodejsql.git`.
2. Entre na pasta do projeto com o comando `cd crud-mynodejsql`.
3. Adicione o package.json com o comando `yarn init -y`.
4. Adicione a dependência `express` com o comando `yarn add express`.
5. Adicione a dependência `mysql` com o comando `yarn add mysql`.
6. 8. Caso tenha instalado o nodemon e queira que o servidor reinicia toda vez que você salvar as alterações que fez, rode o projeto com o comando `yarn dev`.
7. Altere os dados do objeto que é argumento do método createConnection para os dados do seu MySQL:
   ```javascript
   const con = mysql.createConnection({
      host: "localhost", // seu computador
      user: "root", // seu usuário do mysql
      password: "", // sua senha do mysql
      database: "supermarket" // seu banco no mysql
   });
   ```
8. Se a conexão com o banco retornar o erro `Client does not support authentication protocol requested by server; consider upgrading MySQL client`, execute o comando `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';` e `flush privileges;` no MySQL, substituído "password" pela senha que você está usando na conexão com o banco.
9. Caso vá desenvolver, adicione a dependência `nodemon` com o comando `yarn add nodemon -D` e adicione o seguinte trecho de código no package.json:
   ```json
   "scripts": {
    "dev": "nodemon index.js"
   }
   ```
10. Caso não tenha adicionado o nodemon e/ou não queira reiniciar o servidor toda vez que salvar as alterações feitas, rode o projeto com o comando `node index.js`.

# Como criar o banco de dados
1. No Linux, abra o terminal e digite `sudo mysql` seguido da sua senha.
2. Crie o banco de dados `supermarket` com os comandos abaixo:
   ```sql
   CREATE DATABASE IF NOT EXISTS supermarket;
   USE supermarket;

   CREATE TABLE customer(
      id SERIAL PRIMARY KEY,
      cpf VARCHAR(14) NOT NULL,
      name VARCHAR(200) NOT NULL,
      birthDate DATE
   );
   ```
   # Rotas
   > Sugiro testar as requições no Insomnia.
   ## Criar novo cliente
   > **GET** http://localhost:3000/customers/create
   ```json
   {
	   "cpf": "450.222.240-20",
	   "name": "Jesus Costa Lousada",
	   "birthDate": "2001-01-01"
   }
   ```
