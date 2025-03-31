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
  .querySelector("#mundCircle")
  .addEventListener("mouseover", headHighlight);
document
  .querySelector("#mundCircle")
  .addEventListener("mouseout", headUnHighlight);
document.querySelector("#mundCircle").addEventListener("click", mundInfo);

//funktion

function headHighlight() {
  console.log("headHighlight");
  this.style.fill = "#fff";
}
function headUnHighlight() {
  console.log("headUnHighlight");
  this.style.fill = "#f00";
}
