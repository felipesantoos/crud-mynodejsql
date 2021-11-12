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

function updateCustomerById(id, customer) {
    console.log("Service: updateCustomerById");

    customersRepository.updateCustomerById(id, customer);
}

function deleteCustomerById() {
    console.log("Service: deleteCustomerById");

    customersRepository.deleteCustomerById();
}

module.exports = {
    createCustomer: createCustomer,
    readAllCustomers: readAllCustomers,
    readCustomerById: readCustomerById,
    updateCustomerById: updateCustomerById,
    deleteCustomerById: deleteCustomerById,
};
