import {clickDotXTimes, iterateList, iterateSandLetters, iterateSandWords} from "./helpfulFuncs";

const { ExpansionPanelActions } = require("@material-ui/core")
const { cyan } = require("@material-ui/core/colors")
const { interpolate } = require("react-spring")
import {charToMorse, morseToChar} from "../../src/Components/Games/charMorseConv";
import {initial} from "../../src/Components/Games/Common/Functions";
// ./node_modules/.bin/cypress open

//Easy access to dot
var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

describe('Sandbox Words Game Test', function () {
    it('Navigates to Sandbox Words Game and tests functionality', function () {
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
        cy.contains('Sandbox Words').click()
        cy.url()
            .should('include','/sandboxWords')

        // Assert - make an assertion
        // - make an assertion about page content

        cy.get("[id^=start]").click()

        //Check for dot/dash buttons
        cy.get("button[id^='dotButton']")
        cy.get("button[id^='dashButton']")


        iterateSandWords(list)

        //Go back button should go back to games page
        cy.contains("Go back to games").click()
        cy.url().should("include", "/games")

    })
})