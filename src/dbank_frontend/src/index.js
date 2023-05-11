import { dbank_backend } from "../../declarations/dbank_backend";

window.addEventListener("load", async function() {
  //console.log("Finished loading")
  update()
});

document.querySelector("form").addEventListener("submit", async function() {
  event.preventDefault;
  //console.log("submitted");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length != 0) {
    await dbank_backend.topUp(inputAmount);
  }

  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await dbank_backend.withdraw(outputAmount);
  }

  
  update()
  
  document.getElementById("input-amount").value = "";
  button.removeAttribute("disabled");
});

async function update() {
  const currentAmount = await dbank_backend.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount*100)/100;
}