{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.5649;
        const rateUSD = 3.7855;
        const rateGBP = 5.2521;
        const rateCHF = 4.1354;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;

            case "CHF":
                return amount / rateCHF;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `Za ${amount} PLN otrzymasz ${result.toFixed(2)} ${currency}`
    }; 

    const onFormSubmit =  (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}