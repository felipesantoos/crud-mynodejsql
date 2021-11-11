class CustomerModel {
    constructor(id, cpf, name, birthDate) {
        this.id = id;
        this.cpf = cpf;
        this.name = name;
        this.birthDate = birthDate;
    }
}

module.exports = {
    CustomerModel: CustomerModel,
};
