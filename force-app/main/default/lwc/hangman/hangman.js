import { LightningElement } from 'lwc';
import { Game } from './game.js';

export default class Hangman extends LightningElement {

    connectedCallback() {
        console.log('CONNECTED CALLBACK');
        this.game = new Game();
        this.imageUrl = this.game.imageUrl;
    }

    get letters() {
        return this.game.letters;
    }
}