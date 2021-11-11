const CustomerDTO = require("../../domain/dto/customerDTO");
const customersService = require("../../services/customersService");

// Importação das mensagens retornadas nas requisições.
const messages = require("../../utils/messages");

// Função de criação de um novo cliente.
function createCustomer(req, res) {
    console.log("Handler: createCustomer");

    const { cpf, name, birthDate } = req.body;
    const customer = new CustomerDTO(cpf, name, birthDate);

    customersService.createCustomer(customer);

    console.log(messages.createSuccess);
    res.json(messages.createSuccess);
}

// Função de listagem dos dados de todos os clientes.
function readAllCustomers(req, res) {
    console.log("Handler: readAllCustomers");

    customersService.readAllCustomers();

    console.log(messages.readSuccess);
    res.json(messages.readSuccess);
}

// Função de listagem dos dados de um cliente específico.
function readCustomerById(req, res) {
    console.log("Handler: readCustomerById");

    const { id } = req.params;

    customersService.readCustomerById();

    console.log(messages.readSuccess);
    res.json(messages.readSuccess);
}

// Função de atualização dos dados de um cliente específico.
function updateCustomerById(req, res) {
    console.log("Handler: updateCustomerById");
    
    const { id } = req.params;
    const { cpf, name, birthDate } = req.body;

    customersService.updateCustomerById();

    console.log(messages.updateSuccess);
    res.json(messages.updateSuccess);
}

// Função de remoção de um cliente específico.
function deleteCustomerById(req, res) {
    console.log("Handler: deleteCustomerById");

    const { id } = req.params;

    customersService.deleteCustomerById();

    console.log(messages.deleteSuccess);
    res.json(messages.deleteSuccess);
}

module.exports = {
    createCustomer: createCustomer,
    readAllCustomers: readAllCustomers,
    readCustomerById: readCustomerById,
    updateCustomerById: updateCustomerById,
    deleteCustomerById: deleteCustomerById,
};
