let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.5649;
let rateUSD = 3.7855;
let rateGBP = 5.2521;
let rateCHF = 4.1354;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "CHF":
            result = amount / rateCHF;
            break;
    }
    resultElement.innerText = `Za ${amount} PLN otrzymasz ${result.toFixed(2)} ${currency}`

});
