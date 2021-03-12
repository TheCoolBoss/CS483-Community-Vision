const { ExpansionPanelActions } = require("@material-ui/core")
const { cyan } = require("@material-ui/core/colors")
const { interpolate } = require("react-spring")
import {charToMorse, morseToChar} from "../../src/Components/Games/charMorseConv";
import {initial} from "../../src/Components/Games/Common/Functions";
// ./node_modules/.bin/cypress open

//Easy access to dot
var dot = "•";

describe('Sandbox Letters Game Test', function () {
    it('Navigates to Sandbox Letters Game and tests functionality', function () {
        // Arrange - setup initial app state
        // - query for an element
        cy.visit('http://localhost:3000/')
        // Act - take an action
        // - interact with that element
        cy.contains('Play Morse!')
        cy.contains('Play Games!').click()
        cy.contains('Play Games!').click()
        cy.url()
            .should('include','/games')
        cy.contains('Sandbox Letters').click()
        cy.url()
            .should('include','/sandboxLetters')

        // Assert - make an assertion
        // - make an assertion about page content

        //Check for dot/dash buttons
        cy.contains("•")
        cy.contains("-")

        //Click dot button, wait for output to appear, then check output
        cy.contains("•").click()
        cy.wait(initial("speed"))
        cy.contains(morseToChar("•"))

        cy.contains("•").click()
        cy.contains("•").click()
        cy.contains(morseToChar("••"))

        //Go back button should go back to games page
        cy.contains("Go back").click()
        cy.url().should("include", "/games")

    })
})