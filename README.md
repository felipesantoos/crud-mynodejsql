# MyNodejSQL

Um CRUD feito com Node.js e MySQL.

# Objetivo

- Criar um servidor local com Node.js que permita o cadastro, listagem (geral e individual), atualização e remoção de clientes de um banco de dados criado com o SGBD MySQL.

# Tarefas
- [x] Criar esquema do banco de dados;
- [x] Criar projeto em Node.js;
- [ ] Realizar a conexão com o banco de dados;
- [ ] Criar as rotas de cadastro, listagem (geral e individual), atualização e remoção;
- [ ] Criar as funções de cadastro, listagem (geral e individual), atualização e remoção;

# Como rodar este projeto
1. Clone o repositório com o comando `git clone https://github.com/felipesantosds/crud-mynodejsql.git`.
2. Entre na pasta do projeto com o comando `cd crud-mynodejsql`.
3. Adicione o package.json com o comando `yarn init -y`.
4. Adicione a dependência `express` com o comando `yarn add express`.
5. Caso vá desenvolver, adicione a dependência `nodemon` com o comando `yarn add nodemon -D` e adicione o seguinte trecho de código no package.json:
   ```json
   "scripts": {
    "dev": "nodemon index.js"
   }
   ```
7. Caso não tenha adicionado o nodemon e/ou não queira reiniciar o servidor toda vez que salvar as alterações feitas, rode o projeto com o comando `node index.js`.
8. Caso tenha instalado o nodemon e queira que o servidor reinicia toda vez que você salvar as alterações que fez, rode o projeto com o comando `yarn dev`.

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
