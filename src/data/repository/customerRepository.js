const { getConnection, endConnection, makeDb } = require("../db/connection");

async function createCustomer(customer) {
    console.log("Repository: createCustomer");

    const db = makeDb();
    var sql = "INSERT INTO customer (cpf, name, birthDate) VALUES ?";
    var values = [[customer.cpf, customer.name, customer.birthDate]];

    try {
        const result = await db.query(sql, [values]);

        return result.insertId;
    } catch (err) {
        throw err;
    } finally {
        await db.close();
    }
}

async function readAllCustomers() {
    console.log("Repository: readAllCustomers");

    const db = makeDb();
    var sql = "SELECT * FROM customer";

    try {
        const result = await db.query(sql);
        console.log(result);

        return result;
    } catch (err) {
        throw err;
    } finally {
        await db.close();
    }

}

async function readCustomerById(id) {
    console.log("Repository: readCustomerById");

    const db = makeDb();
    var sql = "SELECT * FROM customer WHERE id = ?";
    var values = id;

    try {
        const result = await db.query(sql, values);
        console.log(result);

        return result[0];
    } catch (err) {
        throw err;
    } finally {
        await db.close();
    }
}

async function updateCustomerById(id, customer) {
    console.log("Repository: updateCustomerById");

    const db = makeDb();
    var sql = "UPDATE customer SET cpf = ?, name = ?, birthDate = ? WHERE id = ?";
    var values = [customer.cpf, customer.name, customer.birthDate, id];

    try {
        const result = await db.query(sql, values);
        console.log(result);

        return result;
    } catch (err) {
        throw err;
    } finally {
        await db.close();
    }
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
