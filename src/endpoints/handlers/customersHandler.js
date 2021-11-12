const CustomerDTO = require("../../domain/dto/customerDTO");
const customersService = require("../../services/customersService");

// Importação das mensagens retornadas nas requisições.
const messages = require("../../utils/messages");

// Função de criação de um novo cliente.
async function createCustomer(req, res) {
    console.log("Handler: createCustomer");

    const { cpf, name, birthDate } = req.body;
    const customer = new CustomerDTO(cpf, name, birthDate);

    var newCustomerId = await customersService.createCustomer(customer);

    console.log({id: newCustomerId});
    res.json({id: newCustomerId});
}

// Função de listagem dos dados de todos os clientes.
async function readAllCustomers(req, res) {
    console.log("Handler: readAllCustomers");

    const customers = await customersService.readAllCustomers();

    console.log(customers);
    res.json(customers);
}

// Função de listagem dos dados de um cliente específico.
async function readCustomerById(req, res) {
    console.log("Handler: readCustomerById");

    const { id } = req.params;

    const customer = await customersService.readCustomerById(id);

    console.log(customer);
    res.json(customer);
}

// Função de atualização dos dados de um cliente específico.
function updateCustomerById(req, res) {
    console.log("Handler: updateCustomerById");
    
    const { id } = req.params;
    const { cpf, name, birthDate } = req.body;

    const customer = new CustomerDTO(cpf, name, birthDate);

    customersService.updateCustomerById(id, customer);

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
