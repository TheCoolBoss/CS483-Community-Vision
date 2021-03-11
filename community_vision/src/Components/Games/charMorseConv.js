//Converts chars to Morse and vice versa

//To import this into a game, add the following code
//Be sure to update the directory if needed
//import {charToMorse, morseToChar} from "./charMorseConv";

export function morseToChar(x) {
    if (x === '•-'){
        return 'A';
    } else if (x === '-•••'){
        return 'B';
    } else if (x === '-•-•'){
        return 'C';
    } else if (x === '-••'){
        return 'D';
    } else if (x === '•'){
        return 'E';
    } else if (x === '••-•'){
        return 'F';
    } else if (x === '--•'){
        return 'G';
    } else if (x === '••••'){
        return 'H';
    } else if (x === '••'){
        return 'I';
    } else if (x === '•---'){
        return 'J';
    } else if (x === '-•-'){
        return 'K';
    } else if (x === '•-••'){
        return 'L';
    } else if (x === '--'){
        return 'M';
    } else if (x === '-•'){
        return 'N';
    } else if (x === '---'){
        return 'O';
    } else if (x === '•--•'){
        return 'P';
    } else if (x === '--•-'){
        return 'Q';
    } else if (x === '•-•'){
        return 'R';
    } else if (x === '•••'){
        return 'S';
    } else if (x === '-'){
        return 'T';
    } else if (x === '••-'){
        return 'U';
    } else if (x === '•••-'){
        return 'V';
    } else if (x === '•--'){
        return 'W';
    } else if (x === '-••-'){
        return 'X';
    } else if (x === '-•--'){
        return 'Y';
    } else if (x === '--••'){
        return 'Z';
    } else if (x === '•----'){
        return '1';
    } else if (x === '••---'){
        return '2';
    } else if (x === '•••--'){
        return '3';
    } else if (x === '••••-'){
        return '4';
    } else if (x === '•••••'){
        return '5';
    } else if (x === '-••••'){
        return '6';
    } else if (x === '--•••'){
        return '7';
    } else if (x === '---••'){
        return '8';
    } else if (x === '----•'){
        return '9';
    } else if (x === '-----'){
        return '0';
    } else{
        return '';
    }
}

export function charToMorse(x) {
    if (x === 'A'){
        return '•-';
    } else if (x === 'B'){
        return '-•••';
    } else if (x === 'C'){
        return '-•-•';
    } else if (x === 'D'){
        return '-••';
    } else if (x === 'E'){
        return '•';
    } else if (x === 'F'){
        return '••-•';
    } else if (x === 'G'){
        return '--•';
    } else if (x === 'H'){
        return '••••';
    } else if (x === 'I'){
        return '••';
    } else if (x === 'J'){
        return '•---';
    } else if (x === 'K'){
        return '-•-';
    } else if (x === 'L'){
        return '•-••';
    } else if (x === 'M'){
        return '--';
    } else if (x === 'N'){
        return '-•';
    } else if (x === 'O'){
        return '---';
    } else if (x === 'P'){
        return '•--•';
    } else if (x === 'Q'){
        return '--•-';
    } else if (x === 'R'){
        return '•-•';
    } else if (x === 'S'){
        return '•••';
    } else if (x === 'T'){
        return '-';
    } else if (x === 'U'){
        return '••-';
    } else if (x === 'V'){
        return '•••-';
    } else if (x === 'W'){
        return '•--';
    } else if (x === 'X'){
        return '-••-';
    } else if (x === 'Y'){
        return '-•--';
    } else if (x === 'Z'){
        return '--••';
    } else if (x === '1'){
        return '•----';
    } else if (x === '2'){
        return '••---';
    } else if (x === '3'){
        return '•••--';
    } else if (x === '4'){
        return '••••-';
    } else if (x === '5'){
        return '•••••';
    } else if (x === '6'){
        return '-••••';
    } else if (x === '7'){
        return '--•••';
    } else if (x === '8'){
        return '---••';
    } else if (x === '9'){
        return '----•';
    } else if (x === '0'){
        return '-----';
    } else{
        return '';
    }
}

