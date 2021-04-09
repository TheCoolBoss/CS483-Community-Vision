import {clickDotXTimes, iterateButtons, iterateList, iterateSandLetters, iterateWords} from "./helpfulFuncs";

const { ExpansionPanelActions } = require("@material-ui/core")
const { cyan } = require("@material-ui/core/colors")
const { interpolate } = require("react-spring")
import {charToMorse, morseToChar} from "../../src/Components/Games/charMorseConv";
import {initial} from "../../src/Components/Games/Common/Functions";
// ./node_modules/.bin/cypress open

//Note, this test took over 10 minutes to run, so be prepared if you want to run this :)
describe('Learn Words Test', function () {
    it('Navigates to Learn Words Game and tests functionality', function () {
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
        cy.get("[id^='medWords']").click()
        cy.url()
            .should('include','/learnWordMedium')

        // Assert - make an assertion
        // - make an assertion about page content

        cy.get("[id^=start]").click()

        //Check for dot/dash buttons
        cy.get("button[id^='dotButton']")
        cy.get("button[id^='dashButton']")


        iterateWords()

        //clickDotXTimes(6)
        //cy.get("[id^=input]").contains("")
        //cy.get("[id^=output]").contains(morseToChar(""))

        //Go back button should go back to games page
        cy.contains("Go back to games").click()
        cy.url().should("include", "/games")

    })
})