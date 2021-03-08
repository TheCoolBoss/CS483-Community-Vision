describe('Learning Alphabet Game Test', () => {
    it('Navigates to Learn Alph Game and tests functionality', () => {
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
    it('Navigates to Learn Alph No Help Game and tests functionality', () => {
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
        cy.contains('Alphabet No Help').click()
        cy.url()
            .should('include','/noHelpAlphabet')
        
        // Assert - make an assertion
        // - make an assertion about page content
    })
})

describe('Sandbox Games Navigation Test', () => {
    it('Navigate from home page to sandbox words game', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Play Games!').click();
        cy.url()
            .should('include', '/settings');
        cy.contains('Play Games!').click();
        cy.url()
            .should('include', '/games');
        cy.contains('Sandbox Words').click();
        cy.url()
            .should('include', '/sandboxWords');
    })

    it('Navigate from home page to sandbox letters game', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Play Games!').click();
        cy.url()
            .should('include', '/settings');
        cy.contains('Play Games!').click();
        cy.url()
            .should('include', '/games');
        cy.contains('Sandbox Letters').click();
        cy.url()
            .should('include', '/sandboxLetters');
        
    })
})

describe('Numbers Game Navigation Test', () => {
    it('Navigate from home page to numbers game', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Play Games!').click();
        cy.url()
            .should('include', '/settings');
        cy.contains('Play Games!').click();
        cy.url()
            .should('include', '/games');
        cy.contains('Learn Numbers').click();
        cy.url()
            .should('include', '/learnNumbers');
    })
})

describe('Word Games Navigation Test', () => {
    it('Navigate from home page to word game beginner page', () => {
        //Visit home page
        cy.visit('http://localhost:3000');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Check that we are in the settings page
        cy.url()
            .should('include', '/settings');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Assert that we are in the '/games' page
        cy.url()
            .should('include', '/games')
        //Look for element that contains 'Learn Word Easy' and click on it
        cy.contains('Learn Word Easy').click();
        //Check that we are on the correct URL
        cy.url()
            .should('include', '/learnWordBeginner')
    })

    it('Navigate from home page to word game medium page', () => {
        //Visit home page
        cy.visit('http://localhost:3000');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Check that we are in the settings page
        cy.url()
            .should('include', '/settings');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Assert that we are in the '/games' page
        cy.url()
            .should('include', '/games')
        //Look for element that contains 'Learn Word Medium' and click on it
        cy.contains('Learn Word Medium').click();
        //Check that we are on the correct URL
        cy.url()
            .should('include', '/learnWordMedium')
    }) 

    it('Navigate from home page to word game advanced page', () => {
        //Visit home page
        cy.visit('http://localhost:3000');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Check that we are in the settings page
        cy.url()
            .should('include', '/settings');
        //Look for element that contains 'Play Games!' and click on it
        cy.contains('Play Games!').click();
        //Assert that we are in the '/games' page
        cy.url()
            .should('include', '/games')
        //Look for element that contains 'Learn Word Advanded' and click on it
        cy.contains('Learn Word Advanced').click();
        //Check that we are on the correct URL
        cy.url()
            .should('include', '/learnWordAdvanced')
    }) 
})