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
  console.log("highlight");
  this.style.fill = "#fff";
}

function headUnHighlight() {
  console.log("unhighlight");
  this.style.fill = "#f00";
}

function headInfo() {
  console.log("headInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "HOVEDET!";
  document.querySelector(".info-text > article").innerHTML =
    "<p>KÆMPE hoved - på størrelse med to bowlingkugler!";
  document.querySelector(".info-text > article").innerHTML +=
    "<p>Aliens kan mutere sig til mennesker de ser på deres vej, du kan derfor genkende dem på deres kæmpe hoveder som de stadig har, selvom den har muteret sig til mennesker.";
  document.querySelector(".info-text > article").innerHTML +=
    "<p>Du kan også forvirre dem ved at sige mip mip, imens der bliver tilkaldt hjælp. På deres sprog er mip mip fulde sætninger, men selvom du taler volapyk, er det med til at hjælpe da du forvirrer dem så de ikke går med det samme.";
  document.querySelector(".info-text > article").innerHTML +=
    "<p>Denne strategi vinder os tid så vi kan komme frem og fange alienet. ";
  document.querySelector("#efficiency").innerHTML =
    "<h3>EFFEKTIVITET:</h3><p>Super duper god.</p>";
  document.querySelector("#requirement").innerHTML =
    "<h3>STYRKE:</h3><p>Kan udføres af alle der har mod på at gå op til en alien.</p>";
}

function armInfo() {
  console.log("armInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "ARMEN!";
  document.querySelector(".info-text > article > p").innerHTML =
    "<p>Lange, tynde spaghetti-arme – næsten dobbelt så lange som menneskearme.";
  document.querySelector(".info-text > article > p").innerHTML +=
    "<p>Aliens har utroligt lange, tynde arme, som de prøver at skjule ved at holde dem tæt ind til kroppen eller gemme dem i store jakker. Hvis du ser nogen, der nægter at tage sin jakke af, selv på en varm sommerdag, så hold øje – det kan være en alien!";
  document.querySelector(".info-text > article > p").innerHTML +=
    "<p>Sådan forvirrer du dem - Giv dem en high-five. Aliens ved ikke, hvordan en high-five fungerer og vil enten forsøge at gribe din hånd som en hilsen eller svinge deres arm alt for langt tilbage, hvilket kan afsløre deres sande natur.";
  document.querySelector("#efficiency").innerHTML =
    "<h3>EFFEKTIVITET:</h3><p>Virkelig god – især hvis du kan lide at give high-fives.";
  document.querySelector("#requirement").innerHTML =
    "<h3>STYRKE:</h3><p>Kræver kun, at du ikke er bange for akavede håndtryk.</p>";
}

function benInfo() {
  console.log("benInfo");

  animateBoxes();

  document.querySelector(".info-text > h2").textContent = "FØDDERNE!";
  document.querySelector(".info-text > article > p").innerHTML =
    "<p>Tre tæer, der peger i hver sin retning";
  document.querySelector(".info-text > article > p").innerHTML +=
    "<p>Aliens har mærkelige fødder, som gør det svært for dem at gå normalt. Du kan spotte dem ved at kigge efter folk, der går meget kluntet eller som om de ikke har brugt ben før. Hvis du ser en person, der snubler over ingenting eller sætter fødderne ned i en underlig vinkel, kan det være en alien.";
  document.querySelector(".info-text > article > p").innerHTML +=
    "<p>Sådan forvirrer du dem - Smid en bananskræl på jorden. Mennesker vil prøve at undgå den, men en alien vil træde direkte på den, fordi de ikke kender til slapstick-humor. Hvis de ikke falder, men i stedet står og ser forvirrede ud, har du din alien!";
  document.querySelector("#efficiency").innerHTML =
    "<h3>EFFEKTIVITET:</h3><p>Meget høj – især hvis du har adgang til bananskræller.";
  document.querySelector("#requirement").innerHTML =
    "<h3>STYRKE:</h3><p>Perfekt for dem, der elsker gamle tegnefilm.</p>";
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
