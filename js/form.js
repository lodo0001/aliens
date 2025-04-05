// slider
const slider = document.querySelector("#truet");
const dangerValue = document.querySelector("#range-value");

// ændringer
slider.addEventListener("input", updateValue);

// funktion til når den skal opdatere valuen (textContent)
function updateValue() {
  // console.log("updateValue");
  // console.log(slider.value);
  dangerValue.textContent = slider.value;

  if (slider.value > 49 && slider.value < 90) {
    console.log(`fareniveauet er ${slider.value}`);
    // slider.parentNode.style.accentColor = "var(--warning-color)";
    slider.style.backgroundColor = "var(--warning-color)";
  } else if (slider.value >= 90) {
    // slider.parentNode.style.accentColor = "var(--danger-color)";
    slider.style.backgroundColor = "var(--danger-color)";
  } else {
    // slider.parentNode.style.accentColor = "var(--info-color)";
    slider.style.backgroundColor = "var(--info-color)";
  }
}

// SUMMERY

// resetter formen
document.querySelector("#webform").reset();
document.querySelector("#webform2").reset();

// Eventlistnere på knapperne
document.querySelector("#reset_btn").addEventListener("click", reset);
document.querySelector("#submit_btn").addEventListener("click", submitForm);

// Sender value af inputfelterne til Summary
function submitForm(event) {
  event.preventDefault();

  // viser Summary
  document.querySelector("#sum").style.display = "block";

  // forskellige inputfelter
  document.querySelector("#sumHvornår").textContent =
    document.querySelector("#start").value;
  document.querySelector("#sumHvor").textContent =
    document.querySelector("#hvor").value;
  document.querySelector("#sumAntal").textContent =
    document.querySelector("#antal").value;
  document.querySelector("#sumTruende").textContent =
    document.querySelector("#truet").value;
  document.querySelector("#sumOplevelse").textContent =
    document.querySelector("#bigText").value;
  document.querySelector("#sumBem").textContent =
    document.querySelector("#bigText2").value;

  // radiobuttons
  const alienRadio = document.querySelector('input[name="alien"]:checked');
  const menneskeRadio = document.querySelector(
    'input[name="menneske"]:checked'
  );

  document.querySelector("#sumAlien").textContent = document.querySelector(
    'input[name="alien"]:checked'
  ).value;
  document.querySelector("#sumMuteret").textContent = document.querySelector(
    'input[name="menneske"]:checked'
  ).value;

  // array
  const myArray = [];

  // Pusher elementerne ind i myArray
  function lavListe(element) {
    myArray.push(element.value);
  }
  // Putter arrayet ind i summary og separerer med komma og mellemrum
  document.querySelector("#sumBehaviour").textContent = myArray.join(", ");
}

// Resetter Formen og skjuler Summary
function reset() {
  document.querySelector("#webform").reset();
  document.querySelector("#webform2").reset();
  document.querySelector("#sum").style.display = "none";
}
