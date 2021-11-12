// Módulo do MySQL.
const mysql = require("mysql");

// Configurações da conexão.
var db_config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "supermarket",
};

// Criação da variável de conexão.
var connection = mysql.createConnection(db_config);

// Estabelecimento de uma nova conexão.
connection.connect((err) => {
    if (err) {
        console.log("Cannot establish a connection with the database.");

        connection = reconnect(connection);
    } else {
        console.log("New connection established with the database.");
    }
});

// Exportação das funções.
module.exports = {
    connection: connection,
};
