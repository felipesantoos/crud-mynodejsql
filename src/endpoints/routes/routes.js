// Importação do módulo de gerenciamento das rotas.
const express = require("express");
// Importação do módulo que contém as funções executadas nas rotas dos clientes.
const customersHandler = require("../../endpoints/handlers/customersHandler");
// Cria o servidor.
const server = express();

// Faz com que o express entenda JSON.
server.use(express.json());

// Rota de cadastro de um novo cliente.
server.post("/customers/create", customersHandler.createCustomer);

// Rota de listagem de todos os clientes.
server.get("/customers/read", customersHandler.readAllCustomers);

// Rota de listagem de um cliente específico.
server.get("/customers/read/:id", customersHandler.readCustomerById);

// Rota de atualização de um cliente específico.
server.put("/customers/update/:id", customersHandler.updateCustomerById);

// Rota de remoção de um cliente específico.
server.delete("/customers/delete/:id", customersHandler.deleteCustomerById);

// Exportação da constante server.
module.exports = {
    server: server,
};
