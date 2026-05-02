describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  context('Verifica o redirecionamento de página', () => {
    it('Clica no botão "Cadastre-se" e abre a tela para inserção de dados', () => {
      cy.get('[href="/cadastro"]').click();
      cy.location('pathname').should('equal', '/cadastro');
    })
  })

  context('Realiza o cadastro parcial de uma clínica com sucesso', () => {
    it('Digita dados da clínica e exibe área para preenchimento de dados técnicos', () => {
      cy.get('[href="/cadastro"]').click();
      cy.cadastroClínica('Clínica de São Paulo', '12345678000195', 'clinica@teste.com', 'Senha123');
      cy.contains('h2', 'Agora, os dados técnicos:').should('be.visible');
      cy.get('.sc-laZRCg').should('exist').should('be.visible');
    })
  })

  context('Realiza o cadastro completo da clínica', () => {
    it('Realiza o cadastro completo da clínica e verifica o redirecionamento para tela de login', () => {
      cy.get('[href="/cadastro"]').click();
      cy.cadastroClínica('Clínica de São Paulo', '12345678000195', 'clinica@teste.com', 'Senha123');
      cy.cadastroTecnico('11987654321', '12345-678', 'Rua Teste', '123', 'Casa', 'São Paulo');
      cy.location('pathname').should('equal', '/login');
    })
  })
})