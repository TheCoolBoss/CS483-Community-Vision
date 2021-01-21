describe('Learning Alphabet Game Test', function () {
    it('Navigates to Learn Alph Game and tests functionality', function () {
        // Arrange - setup initial app state
        // - visit Learning Alphabet game page
        // - query for an element
        cy.visit('http://localhost:3000/')
        // Act - take an action
        // - interact with that element
        cy.contains('Play Morse!')
        cy.contains('Play Games!').click()
        //Check that we are in the settings page
        cy.url().
            should('include', '/settings');
        cy.contains('Play Games!').click()
        cy.url()
            .should('include','/games')
        cy.contains('Learn The Alphabet').click()
        cy.url()
            .should('include','/learnAlphabet')
        
        // Assert - make an assertion
        // - make an assertion about page content
    })
})

describe('Word Game Beginner Test', function() {
    it('Navigate from home page to word game beginner page', function() {
        //Visit home page
        cy.visit('http://localhost:3000');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Check that we are in the settings page
        cy.url()
            .should('include', '/settings');
        //Make sure it contains all setting elements
        cy.contains('CHOOSE GAME VOLUME');
        cy.contains('CHOOSE GAME SPEED');
        cy.contains('CHOOSE TEXT SIZE');
        cy.contains('PICK A THEME!');
        cy.contains('CHOOSE BACKGROUND COLOR');
        cy.contains('CHOOSE COLOR FOR WORDS');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Look for element that contains 'Learn Word Easy' and click on it
        cy.contains('Learn Word Easy').click();
        //Check that we are on the correct URL
        cy.url()
            .should('include', '/learnWordBeginner')
    }) 
})

describe('Word Game Medium Test', function() {
    it('Navigate from home page to word game medium page', function() {
        //Visit home page
        cy.visit('http://localhost:3000');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Check that we are in the settings page
        cy.url()
            .should('include', '/settings');
        //Make sure it contains all setting elements
        cy.contains('CHOOSE GAME VOLUME');
        cy.contains('CHOOSE GAME SPEED');
        cy.contains('CHOOSE TEXT SIZE');
        cy.contains('PICK A THEME!');
        cy.contains('CHOOSE BACKGROUND COLOR');
        cy.contains('CHOOSE COLOR FOR WORDS');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Look for element that contains 'Learn Word Medium' and click on it
        cy.contains('Learn Word Medium').click();
        //Check that we are on the correct URL
        cy.url()
            .should('include', '/learnWordMedium')
    }) 
})

describe('Word Game Advanced Test', function() {
    it('Navigate from home page to word game advanced page', function() {
        //Visit home page
        cy.visit('http://localhost:3000');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Check that we are in the settings page
        cy.url()
            .should('include', '/settings');
        //Make sure it contains all setting elements
        cy.contains('CHOOSE GAME VOLUME');
        cy.contains('CHOOSE GAME SPEED');
        cy.contains('CHOOSE TEXT SIZE');
        cy.contains('PICK A THEME!');
        cy.contains('CHOOSE BACKGROUND COLOR');
        cy.contains('CHOOSE COLOR FOR WORDS');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Look for element that contains 'Learn Word Advanded' and click on it
        cy.contains('Learn Word Advanced').click();
        //Check that we are on the correct URL
        cy.url()
            .should('include', '/learnWordAdvanced')
    }) 
})