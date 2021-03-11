import {charToMorse, morseToChar} from "../../src/Components/Games/charMorseConv";
var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

describe('Unit tests for Morse to Char conversions', () => {
    context('morseToChar', () => {
        for (var i = 0; i < list.length; i++)
        {
            var morse = charToMorse(list.charAt(i));
            expect(morseToChar(morse)).equal(list.charAt(i));
        }
    })
})