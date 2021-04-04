import {iterateList} from "./helpfulFuncs";

const { ExpansionPanelActions } = require("@material-ui/core")
const { cyan } = require("@material-ui/core/colors")
const { interpolate } = require("react-spring")
import {charToMorse, morseToChar} from "../../src/Components/Games/charMorseConv";
import {initial} from "../../src/Components/Games/Common/Functions";
// ./node_modules/.bin/cypress open
var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var index = 0;

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
        cy.contains('Game Volume')
        cy.contains('Play Games!').click()
        cy.url()
            .should('include','/games')
        cy.contains('Learn The Alphabet').click()
        cy.url()
            .should('include','/learnAlphabet')


        // Assert - make an assertion
        // - make an assertion about page content
        cy.get("[id^=start]").click()

        //Check for buttons
        cy.get("button[id^='dotButton']")
        cy.get("button[id^='dashButton']")

        //Check that first letter is A
        cy.get("[id^=sampleMorse]").contains(list.charAt(index))

        iterateList(list, 3000)

        //Go back button should go back to games page
        cy.contains("Other Games").click()
        cy.url().should("include", "/games")

    })
})