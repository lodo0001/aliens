//hoved circle
document
  .querySelector("#headCircle")
  .addEventListener("mouseover", headHighlight);
document
  .querySelector("#headCircle")
  .addEventListener("mouseout", headUnHighlight);
document.querySelector("#headCircle").addEventListener("click", headInfo);

//arm circle

document
  .querySelector("#armCircle")
  .addEventListener("mouseover", headHighlight);
document
  .querySelector("#armCircle")
  .addEventListener("mouseout", headUnHighlight);
document.querySelector("#armCircle").addEventListener("click", armInfo);

//mund circle

document
  .querySelector("#benCircle")
  .addEventListener("mouseover", headHighlight);
document
  .querySelector("#benCircle")
  .addEventListener("mouseout", headUnHighlight);
document.querySelector("#benCircle").addEventListener("click", benInfo);

//funktion

function headHighlight() {
  console.log("headhighlight");
  this.style.fill = "#fff";
}
function headUnHighlight() {
  console.log("headUnHighlight");
  this.style.fill = "#f00";
}

function headUnHighlight() {
  console.log("headhighlight");
  this.style.fill = "#fff";
}
function armUnHighlight() {
  console.log("headUnHighlight");
  this.style.fill = "#f00";
}

function headHighlight() {
  console.log("headhighlight");
  this.style.fill = "#fff";
}
function benUnHighlight() {
  console.log("headUnHighlight");
  this.style.fill = "#f00";
}

function headInfo() {
  console.log("headInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "HOVEDET!";
  document.querySelector(".info-text > article").textContent =
    "KÆMPE hoved - på størrelse med to bowlingkugler.";

  document.querySelector("#efficiency").innerHTML =
    "<h3>Effektivitet</h3><p>Super duper god.</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>Styrke</h3><p>Kan udføres af alle der har mod på at gå op til en alien.</p>";
}
function armInfo() {
  console.log("armInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "ARMEN!";
  document.querySelector(".info-text > article > p").textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Effektivitet</h3><p>Virkelig god – især hvis du kan lide at give high-fives.";
  document.querySelector("#requirement").innerHTML =
    "<h3>Styrke</h3><p>Kræver kun, at du ikke er bange for akavede håndtryk.</p>";
}

function benInfo() {
  console.log("benInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "FØDDERNE!";
  document.querySelector(".info-text > article > p").textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.";
  document.querySelector("#efficiency").innerHTML =
    "<h3>Effektivitet</h3><p>Meget høj – især hvis du har adgang til bananskræller.";
  document.querySelector("#requirement").innerHTML =
    "<h3>Styrke</h3><p>Perfekt for dem, der elsker gamle tegnefilm.</p>";
}

function animateBoxes() {
  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadeIn");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadeIn");
  document
    .querySelector("#requirement")
    .addEventListener("animationend", cleanup);
}

function cleanup() {
  console.log("cleanup");
  document
    .querySelector("#requirement")
    .removeEventListener("animationend", cleanup);
  document.querySelector("#efficiency").classList.remove("fadeIn");
  document.querySelector("#requirement").classList.remove("fadeIn");
}
