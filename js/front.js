function setupArticle(article) {
  const openBtn = article.querySelector("#startknap");
  const dialog = article.querySelector("dialog");
  const closeBtn = dialog.querySelector("#slutknap");

  openBtn.addEventListener("click", function () {
    dialog.showModal();
    dialog.scrollTop = 0;
  });

  //pga slukknappen, så scrroller artiklen automatisk ned til bunden hvor knappen befinder sig.
  //Man kan derfor skive "dialog.scrollTop = 0;" for at den automatisk scroller op til toppen.

  closeBtn.addEventListener("click", function () {
    dialog.close();
  });
}

const articles = document.querySelectorAll(".news_card");

articles.forEach(function (article) {
  setupArticle(article);
});

//Lille forklaring på denne kode herunder

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});

//Gør at artiklen lukker når man klikker på baggrrunden.
//querySelectoAll("dialog") finder alle <dialog>
// "Klikkede du direkte på dialogens baggrund (udenfor indholdet)?" = Hvis ja → Luk den.

//Java til dark mode
const btn = document.querySelector("#switchBtn");
const css = document.querySelector("#lightmode");

btn.addEventListener("change", modechange);

// document.querySelector("#checkbox").addEventListener("change", modechange);

function modechange() {
  if (css.href.includes("light.css")) {
    css.href = "css/dark.css";
  } else {
    css.href = "css/light.css";
  }
}
