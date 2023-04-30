class Currency{
    constructor(){
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=rdN6sMagYFV6jagAxgPtHV7HUBeJJOJTnsiAKbLf&base_currency="
    }

     async exchange(amount, fromCurrencyValue, toCurrencyValue){
            const response=  await fetch(`${this.url}${fromCurrencyValue}`);
            const result= await response.json();
            const exchangedResult=result.data[toCurrencyValue]*amount;
            return exchangedResult;
    }
}