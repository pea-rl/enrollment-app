const url = "http://localhost:3000/Student";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#studentTable').should('length', 1);

        let name = 'Isabel DizonS';



        cy.get('#studentTable > tr').last().find('td').first().find('span').first().should('have.text', name);
        //cy.get('#studentTable > tr').last().find('td').eq(1).find('span').first().should('have.text', course);


        cy.get('#studentTable > tr').last().find('td').last().find('button').last().click();

        cy.get('#studentTable > tr').last().find('td').first().find('span').first().should('not.have.text', name);
        //cy.get('#studentTable > tr').last().find('td').eq(1).find('span').first().should('not.have.text', course);
    });
});