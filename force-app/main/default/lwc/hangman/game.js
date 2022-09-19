import ROUND_IMAGES from '@salesforce/resourceUrl/hangmanResources';
import { Passphrase } from './passphrase.js'
class Game {
    letters = Array.from(Array(26))
        .map((e, i) => String.fromCharCode(i + 65));

    constructor() {
        console.log('Hangman game is starting');
        this.passphrase = new Passphrase();
        console.log(this.passphrase);
    }

    get category() {
        return this.passphrase.category;
    }

    get imageUrl() {
        return ROUND_IMAGES + '/images/round-7.png';
    }

    get maskedPassphrase() {
        return this.passphrase.maskedValue;
    }
}

export { Game };