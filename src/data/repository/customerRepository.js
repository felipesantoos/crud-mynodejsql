function createCustomer(customer) {
    console.log("Repository: createCustomer");

    console.log(customer);
}

function readAllCustomers() {
    console.log("Repository: readAllCustomers");
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
