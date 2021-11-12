const { connection } = require("../db/connection");

function createCustomer(customer) {
    console.log("Repository: createCustomer");

    var sql = "INSERT INTO customer (cpf, name, birthDate) VALUES ?";
    var values = [[customer.cpf, customer.name, customer.birthDate]];

    connection.query(sql, [values], (err, result) => {
        if (err) throw err;

        console.log("Number of records inserted: " + result.affectedRows);
    });
}

function readAllCustomers() {
    console.log("Repository: readAllCustomers");

    var sql = "SELECT * FROM customer";

    connection.query(sql, (err, result) => {
        if (err) throw err;

        console.log(result);
    });
}

function readCustomerById() {
    console.log("Repository: readCustomerById");
}

function updateCustomerById() {
    console.log("Repository: updateCustomerById");
}

function deleteCustomerById() {
    console.log("Repository: deleteCustomerById");
}

module.exports = {
    createCustomer: createCustomer,
    readAllCustomers: readAllCustomers,
    readCustomerById: readCustomerById,
    updateCustomerById: updateCustomerById,
    deleteCustomerById: deleteCustomerById,
};
