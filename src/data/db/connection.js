// Módulo do MySQL.
const mysql = require("mysql");
const util = require("util");

// Configurações da conexão.
var db_config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "supermarket",
};

function makeDb() {
    console.log("Establishing a new database connection.");

    const connection = mysql.createConnection(db_config);

    return {
        query(sql, args) {
            return util.promisify(connection.query).call(connection, sql, args);
        },
        close() {
            console.log("Closing the database connection.");

            return util.promisify(connection.end).call(connection);
        }
    };
}

module.exports = {
    makeDb: makeDb,
};
