const { ExpansionPanelActions } = require("@material-ui/core")
const { cyan } = require("@material-ui/core/colors")
const { interpolate } = require("react-spring")
import {charToMorse, morseToChar} from "../../src/Components/Games/charMorseConv";
import {initial} from "../../src/Components/Games/Common/Functions";
// ./node_modules/.bin/cypress open

//Easy access to dot
var dot = "•";

describe('Setting test', function () {
    it('Tests settings functionality', function () {
        // Arrange - setup initial app state
        // - query for an element
        cy.visit('http://localhost:3000/')
        // Act - take an action
        // - interact with that element
        cy.contains('Play Morse!')
        cy.contains('Play Games!').click()

        //Check that we are in the settings page
        cy.url().
        should('include', '/settings')

        //Go to learn alphabet for testing
        cy.contains('Play Games!').click()
        cy.url()
            .should('include','/games')

        cy.contains('Learn The Alphabet').click()
        cy.url()
            .should('include','/learnAlphabet')


        cy.contains("Text Size")
        cy.get("[id='textSlider']")
            .invoke("val", 2)
            .trigger("change")

    })
})