// Importação do módulo de conexão com o banco.
const mysql = require("./src/data/db/connection");

// Importação da constante server.
const { server } = require("./src/endpoints/routes/routes");

// Roda o servidor na porta 3000 do localhost.
server.listen(3000, () => {
    // Informa que o servidor está rodando (e onde).
    console.log("Server started on http://localhost:3000");
    // Testa a conexão com o banco.
    mysql.testConnection();
});
