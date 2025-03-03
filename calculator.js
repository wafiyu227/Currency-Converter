document.querySelector("button").addEventListener("click", () => {
    let fromCurrency = document.getElementById("from").value;
    let toCurrency = document.getElementById("to").value;
    let amount = document.getElementById("amount").value;
  
    fetch(
      `https://api.exconvert.com/convert?access_key=27795807-21253b7a-e1e2854b-47998a2b&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let rate = data.result[toCurrency];
        document.querySelector(
          "p"
        ).innerHTML = `${amount}${fromCurrency} is equal to ${rate.toFixed(
          2
        )}${toCurrency}`;
  
        if (data.result[fromCurrency] === data.result[toCurrency]) {
          document.querySelector(
            "p"
          ).innerHTML = `${amount}${fromCurrency} is equal to ${rate.toFixed(
            2
          )}${fromCurrency}`;
        }
      });
    document.querySelector("form").onsubmit = function () {
      document.querySelector("#amount").innerHTML = "";
      return false;
    };
  });
  
