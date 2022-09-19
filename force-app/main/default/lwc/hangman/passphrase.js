class Passphrase {

    checkedLetters = [];

    constructor() {
        let randomPassphrase = this.drawPassprhase();
        this.value = randomPassphrase.value;
        this.category = randomPassphrase.category;
        this.maskedValue = this.maskPassphrase();
    }

    drawPassprhase() {
        return availablePassphrases[Math.floor(Math.random() * availablePassphrases.length)];
    }

    checkLetter(letter) {
        this.checkedLetters.push(letter);
        if (this.value.toUpperCase().includes(letter)) {
            this.maskedValue = this.maskPassphrase();
            return true;
        };
        return false;
    }

    maskPassphrase() {
        let masked = "";
        for (const char of this.value) {
            if (this.checkedLetters.includes(char.toUpperCase()) || char == " ") {
                masked += char;
            } else {
                masked += "_";
            }
        }
        return masked;
    }

    get maskedPassphrase() {
        return this.maskedValue;
    }
}

let availablePassphrases = [
    { value: "Salesforce Marketing Cloud", category: "Salesforce Clouds" },
    { value: "Beyond The Cloud", category: "Top Blogs"},
    { value: "Lightning Web Components", category: "Frameworks"},
    { value: "Dreamforce", category: "Events"}
]

export { Passphrase };