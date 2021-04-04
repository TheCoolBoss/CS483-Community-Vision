import {iterateList} from "./helpfulFuncs";
const { ExpansionPanelActions } = require("@material-ui/core")
const { cyan } = require("@material-ui/core/colors")
const { interpolate } = require("react-spring")
import {charToMorse, morseToChar} from "../../src/Components/Games/charMorseConv";
import {initial} from "../../src/Components/Games/Common/Functions";
// ./node_modules/.bin/cypress open
var list = "0123456789";
var index = 0;


describe('Learning Numbers Game Test', function () {
    it('Navigates to Learn Nums Game and tests functionality', function () {
        // Arrange - setup initial app state
        // - visit Learning Alphabet game page
        // - query for an element
        cy.visit('http://localhost:3000/')
        // Act - take an action
        // - interact with that element
        cy.contains('Play Morse!')
        cy.contains('Play Games!').click()
        cy.contains('Game Volume')
        cy.contains('Play Games!').click()
        cy.url()
            .should('include','/games')
        cy.contains('Learn Numbers').click()
        cy.url()
            .should('include','/learnNumbers')


        // Assert - make an assertion
        // - make an assertion about page content
        cy.get("[id^=start]").click()

        //Check for buttons
        cy.get("button[id^='dotButton']")
        cy.get("button[id^='dashButton']")

        //Check that first number is 0
        cy.get("[id^=sampleMorse]").contains(list.charAt(index))


        //clickDotXTimes(1)
        iterateList(list, 3000)
        //cy.get("[id^=sampleMorseCode]").contains("")


        //Go back button should go back to games page
        cy.contains("Other Games").click()
        cy.url().should("include", "/games")

    })
})