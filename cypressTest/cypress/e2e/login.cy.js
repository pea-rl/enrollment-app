const url = "http://localhost:3000/";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Login', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#Email').type('irish@mail.com');
        cy.get('#Email').should('have.value', 'irish@mail.com');
        cy.get('#Password').type('Password123');
        cy.get('#Password').should('have.value', 'Password123');

        cy.get("#Login").click();
        //cy.url("#Login");
        cy.url().should('eq', url + 'Home');
    });
});