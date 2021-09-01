const purchasePrice = document.querySelector("#purchasePrice");
const stockQuantity = document.querySelector("#stockQuantity");
const currentPrice = document.querySelector("#currentPrice");
const checkBtn = document.querySelector("#checkBtn");
const output = document.querySelector("#output");

function calculateProfitOrLoss(purPrice, quantity, currPrice) {
  if (purPrice > 0 && currPrice > 0 && quantity > 0) {
    if (purPrice > currPrice) {
      var loss = ((purPrice - currPrice) * quantity).toFixed(2);
      var lossPercentage = (((purPrice - currPrice) * 100) / currPrice).toFixed(
        2
      );
      // console.log(lossPercentage);
      showOuput(`You lost ${lossPercentage}%.Your total loss is  ₹${loss}`);
      output.style.color = "red";
    } else if (currPrice > purPrice) {
      var profit = ((currPrice - purPrice) * quantity).toFixed(2);
      var profitPercentage = (
        ((currPrice - purPrice) * 100) /
        purPrice
      ).toFixed(2);
      console.log(profitPercentage);
      showOuput(
        `You gained ${profitPercentage}%. Your total profit is ₹${profit}`
      );
      output.style.color = "green";
    } else {
      showOuput("NO PROFIT AND NO LOSS 😶😐!!");
      output.style.color = "black";
    }
  } else {
    showOuput("Please enter values greater than 0");
    output.style.color = "red";
  }
}
function showOuput(msg) {
  output.innerText = msg;
}

function clickHandler(e) {
  e.preventDefault();
  const purPrice = purchasePrice.value;
  const quantity = stockQuantity.value;
  const currPrice = currentPrice.value;

  calculateProfitOrLoss(purPrice, quantity, currPrice);
}

checkBtn.addEventListener("click", clickHandler);
