import {clickDotXTimes, iterateButtons, iterateList, iterateSandLetters} from "./helpfulFuncs";

const { ExpansionPanelActions } = require("@material-ui/core")
const { cyan } = require("@material-ui/core/colors")
const { interpolate } = require("react-spring")
import {charToMorse, morseToChar} from "../../src/Components/Games/charMorseConv";
import {initial} from "../../src/Components/Games/Common/Functions";
// ./node_modules/.bin/cypress open


var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

describe('Buttons Game Test', function () {
    it('Navigates to Button Tutorial Game and tests functionality', function () {
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
        cy.contains('Explore Dot and Dash').click()
        cy.url()
            .should('include','/buttons')

        // Assert - make an assertion
        // - make an assertion about page content

        cy.get("[id^=start]").click()

        //Check for dot/dash buttons
        cy.get("button[id^='dotButton']")
        cy.get("button[id^='dashButton']")


        iterateButtons(list)

        //clickDotXTimes(6)
        //cy.get("[id^=input]").contains("")
        //cy.get("[id^=output]").contains(morseToChar(""))

        //Go back button should go back to games page
        cy.contains("Go back to games").click()
        cy.url().should("include", "/games")

    })
})