const { getConnection, endConnection, makeDb } = require("../db/connection");
const messages = require("../../utils/messages");

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

    try {
        const result = await db.query(sql, id);
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

        if (result.affectedRows == 1 && result.changedRows == 1) {
            return messages.updateSuccess;
        } else if (result.affectedRows == 1 && result.changedRows == 0) {
            return messages.updateErrorSameValues;
        } else {
            return messages.updateErrorDataNotFound;
        }
    } catch (err) {
        return messages.updateError;
    } finally {
        await db.close();
    }
}

async function deleteCustomerById(id) {
    console.log("Repository: deleteCustomerById");

    const db = makeDb();
    var sql = "DELETE FROM customer WHERE id = ?";

    try {
        const result = await db.query(sql, id);
        console.log(result);

        if (result.affectedRows == 1) {
            return messages.deleteSuccess;
        } else {
            return messages.deleteErrorDataNotFound;
        }
    } catch (err) {
        return messages.deleteError;
    } finally {
        await db.close();
    }
}

module.exports = {
    createCustomer: createCustomer,
    readAllCustomers: readAllCustomers,
    readCustomerById: readCustomerById,
    updateCustomerById: updateCustomerById,
    deleteCustomerById: deleteCustomerById,
};
