import ROUND_IMAGES from '@salesforce/resourceUrl/hangmanResources';
import { Passphrase } from './passphrase.js'

const NO_OF_ROUNDS = 7;

class Game {

    round = 0;

    letters = Array.from(Array(26))
        .map((e, i) => String.fromCharCode(i + 65));

    constructor() {
        console.log('Hangman game is starting');
        this.passphrase = new Passphrase();
        console.log(this.passphrase);
    }

    checkLetter(letter) {
        const passphraseContainsLetter = this.passphrase.checkLetter(letter); 
        if (!passphraseContainsLetter) {
            this.nextRound();
        }
    }

    nextRound() {
        return this.round++;
    }

    isGameWon() {
        return this.passphrase.value === this.passphrase.maskedValue;
    }

    isGameLost() {
        return this.round >= NO_OF_ROUNDS;
    }

    get category() {
        return this.passphrase.category;
    }

    get imageUrl() {
        return `${ROUND_IMAGES}/images/round-${this.round}.png`;
    }

    get maskedPassphrase() {
        return this.passphrase.maskedValue;
    }
}

export { Game };