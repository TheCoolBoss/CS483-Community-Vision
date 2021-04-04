//These are not the unit tests, they only contain functions that make testing "cleaner"/easier to read :)

import {morseToChar, charToMorse} from "../../src/Components/Games/charMorseConv";
import {initial} from "../../src/Components/Games/Common/Functions";

export function clickDotXTimes(count)
{
    for (var i = 0; i < count; i++)
    {
        cy.get("button[id^='dotButton']").click()
    }
}

export function clickDashXTimes(count)
{
    for (var i = 0; i < count; i++)
    {
        cy.get("button[id^='dashButton']").click()
    }
}

export function enterChar(char)
{
    var morseChar = charToMorse(char);
    var string = "";

    for (var i = 0; i < morseChar.length; i++)
    {
        if (morseChar.charAt(i) === "•")
        {
            cy.get("button[id^='dotButton']").click()
            string += "•";
        }

        else if (morseChar.charAt(i) === "-")
        {
            cy.get("button[id^='dashButton']").click()
            string += "-";
        }
    }

    return string;
}

export function iterateList(list, extraDelay)
{
    for (var i = 0; i < list.length; i++)
    {
        var c = enterChar(list.charAt(i));
        cy.get("[id^=sampleMorseCode]").contains(c)
        cy.contains(morseToChar(c))

        //Wait time is longer than usual due to "correct sound" and other mp3s
        cy.wait((initial("speed") * 1000) + extraDelay)
    }
}

export function iterateSandLetters(list)
{
    for (var i = 0; i < list.length; i++)
    {
        var c = enterChar(list.charAt(i));
        cy.get("[id^=input]").contains(c)
        cy.get("[id^=output]").contains(morseToChar(c))

        cy.wait((initial("speed") * 1000))
    }
}

export function iterateSandWords(list)
{
    var string = "";
    for (var i = 0; i < list.length; i++)
    {
        var c = enterChar(list.charAt(i));
        cy.get("[id^=input]").contains(c)

        cy.wait((initial("speed") * 1000))

        string += morseToChar(c);
        cy.get("[id^=textbox]").contains(string)

        //Clears to prevent clutter
        //Can't test if it's empty since Cypress can't be passed empty string
        if ((i + 1) % 5 === 0)
        {
            cy.get("button[id^='clearButton']").click()
            string = "";
        }
    }
}

