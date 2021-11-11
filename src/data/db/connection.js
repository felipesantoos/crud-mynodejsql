// Importação do módulo do driver do MySQL.
const mysql = require("mysql");

// Criação da conexão.
const con = mysql.createConnection({
    host: "localhost", // Computador.
    user: "root", // Usuário.
    password: "", // Senha.
    database: "supermarket" // Banco de dados.
});

// Função que testa a conexão com o banco.
function testConnection() {
    // Se conecta.
    con.connect((err) => {
        // Verifica se houve algum erro (se sim, o lança).
        if (err) throw err;
        // Se não, mostra uma mensagem no console.
        console.log("Database connected!");
    });

    // Fecha a conexão.
    con.end();
}

// Exportação das funções.
module.exports = {
    con: con,
    testConnection: testConnection,
};
