class rng {
    constructor(numberOfChoices) {
        this.numberOfChoices = numberOfChoices;

    }

    generateRandomNumber() {
        let randomNumber = Math.floor(Math.random() * this.numberOfChoices) +1;
        return randomNumber;



    }

}

module.exports = rng