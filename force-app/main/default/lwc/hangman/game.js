import ROUND_IMAGES from '@salesforce/resourceUrl/hangmanResources';
class Game {

    constructor() {
        console.log('Hangman game is starting');
    }

    get imageUrl() {
        return ROUND_IMAGES + '/images/round-7.png';
    }
}

export { Game };