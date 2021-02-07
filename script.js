//First Class Price increase
document
  .getElementById("increase-fristClass")
  .addEventListener("click", function () {
    handleTicketBuying("firstClass", true);
  });
document
  .getElementById("decrease-firstClass")
  .addEventListener("click", function () {
    handleTicketBuying("firstClass", false);
  });
function handleTicketBuying(clss, isIncrease) {
  const ticketInput = document.getElementById(clss + "-ticketCount");
  const ticketCount = parseInt(ticketInput.value);
  let ticketNewCount = ticketCount;
  if (isIncrease == true) {
    ticketNewCount = ticketCount + 1;
  }
  if (isIncrease == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }
  ticketInput.value = ticketNewCount;
  //   const ticketPrice = ticketNewCount * 150;
  let ticketPrice = 0;
  if (clss == "firstClass") {
    ticketPrice = ticketNewCount * 150;
  }
  if (clss == "economyClass") {
    ticketPrice = ticketNewCount * 100;
  }
  document.getElementById("ticketPrice").innerText = "$" + ticketPrice;
  priceCalculate();
}
//Economy Class Ticket Buying
document
  .getElementById("increase-economy")
  .addEventListener("click", function () {
    handleTicketBuying("economyClass", true);
  });
document
  .getElementById("decrease-economy")
  .addEventListener("click", function () {
    handleTicketBuying("economyClass", false);
  });
//price Calculate
function priceCalculate() {
  const firstClassCount = getInput("firstClass");
  const economyClassCount = getInput("economyClass");
  const subTotalPrice = firstClassCount * 150 + economyClassCount * 100;
  document.getElementById("ticketPrice").innerText = "$" + subTotalPrice;
  const vat = (subTotalPrice / 100) * 10;
  document.getElementById("ticketVat").innerText = "$" + vat;
  const totalPrice = subTotalPrice + vat;
  document.getElementById("totalPrice").innerText = "$" + totalPrice;
}
//get input
function getInput(position) {
  const ticketInput = document.getElementById(position + "-ticketCount");
  const ticketCount = parseInt(ticketInput.value);
  return ticketCount;
}
