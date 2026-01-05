// ===== Currency Converter JS =====

//handled by Sun, 22

  /* 
  1. In HTML, elements are given IDs so JavaScript can access them.
  document.getElementById() lets JavaScript get a reference to that element, not the value itself.
  */

const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

  // 2. Static exchange rate, in case the API fails to fetch values, or in case of no connectivity
const STATIC_RATE = 90; 

  // 3. Function to get exchange rate using async (API + fallback)
    async function getExchangeRate() {
  try {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/USD"
    );
    const data = await response.json();
    return data.rates.INR;
  } catch (error) {
    console.log("API failed. Using static rate.");
    return STATIC_RATE;
  }
}

  // 4. Button click event, the button gets clicked and the function is called to return a Promise
convertBtn.addEventListener("click", async () => {

  // 5. Read and validate input, turns amount to float values 
  const amount = parseFloat(amountInput.value);

  /* 
     6. Invalidating input in case of unsuitable user inputs
     In web browsers, input already handles no use of letters if you've given it type= "number"
  */
  if (isNaN(amount) || amount <= 0) {
    result.textContent = "Please enter a valid amount.";
    return;
  }

  // 7. we call the async function, and await the Promise or the API call
  const rate = await getExchangeRate();
  let convertedAmount;

  /* 8. Conversion logic (multiply amt with rate to get converted amount in INR ex. 10$ * 90.3 = ₨ 903)
    (divide amt with rate to get converted amt in USD ex. ₨903 / 90.3 = $10)
  */
  if (fromCurrency.value === "USD" && toCurrency.value === "INR") {
    convertedAmount = amount * rate;
  } else if (fromCurrency.value === "INR" && toCurrency.value === "USD") {
    convertedAmount = amount / rate;
  } else {
    convertedAmount = amount;
  }

  // 9. Display result in the element with id as result
  result.textContent =
    `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency.value}`;
});
