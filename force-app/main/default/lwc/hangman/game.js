import ROUND_IMAGES from '@salesforce/resourceUrl/hangmanResources';
class Game {
    letters = Array.from(Array(26))
        .map((e, i) => String.fromCharCode(i + 65));

    constructor() {
        console.log('Hangman game is starting');
    }

    get imageUrl() {
        return ROUND_IMAGES + '/images/round-7.png';
    }
}

export { Game };