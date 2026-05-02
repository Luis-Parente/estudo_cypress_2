describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    context('Verifica o redirecionamento de página', () => {
        it('Clica no botão "Entrar" e abre a tela para inserção de dados', () => {
            cy.get('.sc-iJnaPW').click();
            cy.location('pathname').should('equal', '/login');
        })
    })

    context('Login com sucesso', () => {
        it('Coloca dados válidos e faz login com sucesso', () => {
            cy.login(Cypress.env('email'), Cypress.env('senha'));
        })
    })
})