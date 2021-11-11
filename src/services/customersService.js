const customersRepository = require("../data/repository/customerRepository");

function createCustomer(customer) {
    console.log("Service: createCustomer");

    customersRepository.createCustomer(customer);
}

function readAllCustomers() {
    console.log("Service: readAllCustomers");

    customersRepository.readAllCustomers();
}

function readCustomerById() {
    console.log("Service: readCustomerById");

    customersRepository.readCustomerById();
}

function updateCustomerById() {
    console.log("Service: updateCustomerById");

    customersRepository.updateCustomerById();
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
