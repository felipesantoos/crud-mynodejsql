const customersRepository = require("../data/repository/customerRepository");

async function createCustomer(customer) {
    console.log("Service: createCustomer");

    var newCustomerId = await customersRepository.createCustomer(customer);

    return newCustomerId;
}

async function readAllCustomers() {
    console.log("Service: readAllCustomers");

    const customers = await customersRepository.readAllCustomers();

    return customers;
}

async function readCustomerById(id) {
    console.log("Service: readCustomerById");

    const customer = await customersRepository.readCustomerById(id);

    return customer;
}

async function updateCustomerById(id, customer) {
    console.log("Service: updateCustomerById");

    const message = await customersRepository.updateCustomerById(id, customer);

    return message;
}

async function deleteCustomerById(id) {
    console.log("Service: deleteCustomerById");

    const message = await customersRepository.deleteCustomerById(id);

    return message;
}

module.exports = {
    createCustomer: createCustomer,
    readAllCustomers: readAllCustomers,
    readCustomerById: readCustomerById,
    updateCustomerById: updateCustomerById,
    deleteCustomerById: deleteCustomerById,
};
