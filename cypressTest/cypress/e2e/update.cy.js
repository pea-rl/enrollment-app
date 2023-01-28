const url = "http://localhost:3000/Student";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#studentTable').should('length', 1);


        cy.get('#studentTable > tr').last().find('td').last().find('button').first().click();
        //name
        cy.get('#studentTable > tr').last().find('td').first().find('input').first().should('have.value', 'Isabel Dizon');
        cy.get('#studentTable > tr').last().find('td').first().find('input').first().type('S');
        cy.get('#studentTable > tr').last().find('td').first().find('input').first().should('have.value','Isabel DizonS');
        //course
        cy.get('#studentTable > tr').last().find('td').eq(1).find('input').first().should('have.value', 'BSB');
        cy.get('#studentTable > tr').last().find('td').eq(1).find('input').first().type('e');
        cy.get('#studentTable > tr').last().find('td').eq(1).find('input').first().should('have.value','BSBe');
        

        cy.get('#studentTable > tr').last().find('td').last().find('button').first().click();
        cy.wait(2000);
        cy.get('#studentTable > tr').last().find('td').first().find('span').first().should('have.text', 'Isabel DizonS');
        cy.get('#studentTable > tr').last().find('td').eq(1).find('span').first().should('have.text', 'BSBe');

    });
});