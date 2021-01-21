describe('Word Game Beginner Test', function() {
    it('Navigate from home page to word game beginner page', function() {
        //Visit home page
        cy.visit('http://localhost:3000');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Check that we are in the settings page
        cy.url().should('include', '/settings');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Look for element that contains 'Learn Word Easy' and click on it
        cy.contains('Learn Word Easy').click();
        //Check that we are on the correct URL
        cy.url().should('include', '/learnWordBeginner')
    }) 
})

describe('Word Game Medium Test', function() {
    it('Navigate from home page to word game medium page', function() {
        //Visit home page
        cy.visit('http://localhost:3000');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Check that we are in the settings page
        cy.url().should('include', '/settings');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Look for element that contains 'Learn Word Medium' and click on it
        cy.contains('Learn Word Medium').click();
        //Check that we are on the correct URL
        cy.url().should('include', '/learnWordMedium')
    }) 
})

describe('Word Game Advanced Test', function() {
    it('Navigate from home page to word game advanced page', function() {
        //Visit home page
        cy.visit('http://localhost:3000');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Check that we are in the settings page
        cy.url().should('include', '/settings');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Look for element that contains 'Learn Word Advanded' and click on it
        cy.contains('Learn Word Advanced').click();
        //Check that we are on the correct URL
        cy.url().should('include', '/learnWordAdvanced')
    }) 
})