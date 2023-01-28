const url = "http://localhost:3000/Student";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        cy.url().should('eq', url);

        cy.get('#studentTable').should('length', 1);
        //cy.get("#edit").should('have.value', 'true');
        

        cy.get('#Name').type('Kimberly');
        cy.get('#Name').should('have.value', 'Kimberly');

        cy.get('#Course').type('BSIT');
        cy.get('#Course').should('have.value', 'BSIT');

        cy.get('#Year').type('4');
        cy.get('#Year').should('have.value', '4');
        
        cy.get('#Section').type('A');
        cy.get('#Section').should('have.value', 'A');

        cy.get('#itemEdit').click();

        cy.wait(2000);

        cy.get('#Name').should('be.empty');
        cy.get('#Course').should('be.empty');

        cy.get('#studentTable > tr').last().find('td').first().find('span').first().should('have.text', 'Kimberly');


    });
});