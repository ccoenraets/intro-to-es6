class Mortgage {

    constructor(amount, years, rate) {
        this.amount = amount;
        this.years = years;
        this.rate = rate;
    }

    calculate() {
        // No interest mortgage for ES6 fans
        return this.amount / (this.years * 12);
    }

}

let m = new Mortgage(200000, 30, 3);
console.log(m.calculate());