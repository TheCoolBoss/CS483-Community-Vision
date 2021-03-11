import {charToMorse, morseToChar} from "../../../src/Components/Games/charMorseConv";
var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

it('morseToChar', () => {
    for (let i = 0; i < list.length; i++)
    {
        var morse = charToMorse(list.charAt(i));
        expect(morseToChar(morse)).resolves.toEqual(list.charAt(i));
    }
})
