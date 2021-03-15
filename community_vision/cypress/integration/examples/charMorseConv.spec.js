/// <reference types="cypress" />
var f = require ( "../../../src/Components/Games/charMorseConv");
var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

test('morseToChar', () => {
    for (let i = 0; i < list.length; i++)
    {
        var morse = f.charToMorse(list.charAt(i));
        expect(f.morseToChar(morse)).resolves.toEqual(list.charAt(i));
    }
})
