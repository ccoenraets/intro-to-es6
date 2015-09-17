function calculateMonthlyPayment(principal, years, rate) {
    let monthlyRate = rate / 100 / 12;
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));
    return {monthlyPayment, monthlyRate};
};

var {monthlyPayment, monthlyRate} = calculateMonthlyPayment(200000, 30, 5);

console.log(monthlyPayment);
console.log(monthlyRate);