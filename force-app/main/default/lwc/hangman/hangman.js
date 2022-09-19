import { LightningElement } from 'lwc';
import { Game } from './game.js';

export default class Hangman extends LightningElement {

    imageUrl;
    passphrase;

    connectedCallback() {
        this.startGame();
    }

    startGame() {
        this.game = new Game();
        this.imageUrl = this.game.imageUrl;
        this.passphrase = this.game.maskedPassphrase;
    }

    handleRestartButton() {
        this.startGame();
    }

    handleButtonClick(event) {
        event.target.disabled = true;
        this.game.checkLetter(event.target.textContent);
        this.passphrase = this.game.maskedPassphrase;
        this.imageUrl = this.game.imageUrl;
    }

    get letters() {
        return this.game.letters;
    }

    get category() {
        return this.game.category;
    }

    get isGameFinished() {
        return this.game.isGameWon() || this.game.isGameLost();
    }

    get endGameText() {
        return this.game.isGameWon() ? 'Congratulations, You win! do you want to try again?' : 'You lose the game, do you want to try again?';
    }
}