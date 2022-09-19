import { LightningElement } from 'lwc';
import { Game } from './game.js';

export default class Hangman extends LightningElement {

    passphrase;

    connectedCallback() {
        console.log('CONNECTED CALLBACK');
        this.game = new Game();
        this.imageUrl = this.game.imageUrl;
        console.log(this.game.passphrase.value);
        this.passphrase = this.game.maskedPassphrase;
    }

    handleButtonClick(event) {
        event.target.disabled = true;
    }

    get letters() {
        return this.game.letters;
    }

    get category() {
        return this.game.category;
    }
}