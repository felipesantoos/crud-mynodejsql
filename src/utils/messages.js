function buildMessage(message) {
    return {message};
}

function buildError(error) {
    return {error};
}

// Exportação de mensagens úteis de retorno de requisições.
module.exports = {
    createSuccess: buildMessage("Cadastro realizado com sucesso!"),
    createError: buildError("Ocorreu um erro durante o cadastro!"),
    readSuccess: buildMessage("Listagem realizada com sucesso!"),
    readError: buildError("Ocorreu um erro durante a listagem!"),
    updateSuccess: buildMessage("Atualização realizada com sucesso!"),
    updateErrorSameValues: buildError("Os dados informados são idênticos aos já cadastrados!"),
    updateErrorDataNotFound: buildError("Dados informados não encontrados!"),
    updateError: buildError("Ocorreu um erro durante a atualização!"),
    deleteSuccess: buildMessage("Remoção realizada com sucesso!"),
    deleteErrorDataNotFound: buildError("Dados informados não encontrados!"),
    deleteError: buildError("Ocorreu um erro durante a remoção!"),
};
