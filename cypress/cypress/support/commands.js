Cypress.Commands.add('cadastroClínica', (nome, cnpj, email, senha) => {
    cy.get('[data-test="inputNome"]').type(nome);
    cy.get('[data-test="inputCNPJ"]').type(cnpj);
    cy.get('[data-test="inputEmail"]').type(email);
    cy.get('[data-test="inputSenha"]').type(senha);
    cy.get('[data-test="inputSenhaVerificada"]').type(senha);
    cy.get('.sc-bcXHqe').click();
})

Cypress.Commands.add('cadastroTecnico', (telefone, cep, rua, numero, complemento, estado) => {
    cy.get('[data-test="inputTelefone"]').type(telefone);
    cy.get('[data-test="inputCEP"]').type(cep);
    cy.get('[data-test="inputRua"]').type(rua);
    cy.get('[data-test="inputNumero"]').type(numero);
    cy.get('[data-test="inputComplemento"]').type(complemento);
    cy.get('[data-test="inputEstado"]').type(estado);
    cy.get('.sc-bcXHqe').click();
})