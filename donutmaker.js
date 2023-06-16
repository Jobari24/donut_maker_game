const button = document.querySelector("#clickMe");

const donutCount = document.querySelector("#donutCount");

const autoClick = document.querySelector("#autoClick");

const perSec = document.querySelector("#perSec");

const resetMe = document.querySelector("#resetMe");

let count = 0;

let autoCount = 0;

let perNum = 0;

let autoCost = 100;

button.addEventListener("click", function () {
  count += 1;
  donutCount.innerHTML = `Donut Count: ${count}`;
});

autoClick.addEventListener("click", function () {
  if (count >= autoCost) {
    count -= autoCost;
    autoCount++;
    autoCost = Math.round((autoCost *= 1.1));
    perNum++;
    perSec.innerHTML = `Clicks Per Second: ${perNum}`;
    autoClick.innerHTML = `Auto Clicker Cost: ${autoCost}`;
    donutCount.innerHTML = `Donut Count: ${count}`;
  }
});

setInterval(function () {
  count += perNum;
  donutCount.innerHTML = `Donut Count: ${count}`;
}, 1000);

resetMe.addEventListener("click", function () {
  clearInterval((count = 0), (autoCount = 0), (perNum = 0), (autoCost = 100));
  perSec.innerHTML = `Clicks Per Second: ${perNum}`;
  donutCount.innerHTML = `Donut Count: ${count}`;
  autoClick.innerHTML = `Auto Clicker Cost: ${autoCost}`;
});

const aboutBtn = document.querySelector("#aboutBtn");

const inspirationBtn = document.querySelector("#inspirationBtn");

const contactBtn = document.querySelector("#contactBtn");

const showCont1 = document.querySelector(".dp-container1");

const showCont2 = document.querySelector(".dp-container2");

const showCont3 = document.querySelector(".dp-container3");

const dpLink1 = document.querySelector("#dpLink1");

const dpLink2 = document.querySelector("#dpLink2");

const dpLink3 = document.querySelector("#dpLink3");

function dropIt() {
  if (showCont1.style.display === "none") {
    showCont1.style.display = "block";
  } else {
    showCont1.style.display = "none";
  }
}
