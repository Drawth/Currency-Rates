
    const amountInput = document.getElementById("amount");
    const fromCurrency = document.getElementById("from_currency");
    const toCurrency = document.getElementById("to_currency");
    const resultInput= document.querySelector("#result");
    const currency= new Currency();

    runEventListener()

    function runEventListener(){
        amountInput.addEventListener("input",exchange)
        toCurrency.addEventListener("change",exchange)
        fromCurrency.addEventListener("change",exchange)
    }
    function exchange(){
        const amount= Number(amountInput.value.trim());
        const fromCurrencyValue=fromCurrency.value;
        const toCurrencyValue=toCurrency.value;
        currency.exchange(amount,fromCurrencyValue,toCurrencyValue)
        .then((response)=>{
            resultInput.value=response;
        })
        .catch((err)=>{
            console.log(err);
        })
    }
