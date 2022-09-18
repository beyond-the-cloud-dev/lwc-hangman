import { LightningElement } from 'lwc';
import { Game } from './game.js';

export default class Hangman extends LightningElement {

    connectedCallback() {
        console.log('CONNECTED CALLBACK');
        const game = new Game();
        this.imageUrl = game.imageUrl;
    }
}