const copy = document.querySelector("#copy");
const address = document.querySelector("#address");
const copied = document.querySelector("#copied");
const thankYou = document.querySelector("#thankYou");
const text = document.querySelector("#text");
const languageDivs = document.querySelectorAll("#languages > div");

const seThanks = "Gracias!";
const enThanks = "Thank you!";
const geThanks = "Danke!";
const noThanks = "Takk!";
const itThanks = "Grazie!";

const enText = "Below is my BTC address if you wish to tip me. Any amount is appreciated!"
const seText = "A continuación se muestra mi dirección BTC si desea darme una propina. Cualquier cantidad es apreciada!"
const geText = "Unten ist meine BTC-Adresse, wenn Sie mir einen Tipp geben möchten. Jeder Betrag wird geschätzt!"
const noText = "Nedenfor er min BTC-adresse hvis du ønsker å tippe meg. Hvert beløp er verdsatt!"
const itText = "Di seguito è il mio indirizzo BTC se desideri darmi un suggerimento. Ogni importo è apprezzato!"

copy.addEventListener("click", () => {
    const value = address.innerText;
      navigator.clipboard.writeText(value);
      copied.innerHTML = "Copied!";
  });


for (let i = 0; i < languageDivs.length; i++) {
    languageDivs[i].onclick = function() {
      switch (languageDivs[i].id) {
        case "se":
          thankYou.innerText = seThanks;
          text.innerText = seText;
          break;
        case "gb":
          thankYou.innerText = enThanks;
          text.innerText = enText;
          break;
        case "no":
          thankYou.innerText = noThanks;
          text.innerText = noText;
          break;
        case "it":
          thankYou.innerText = itThanks;
          text.innerText = itText;
          break;
        case "de":
          thankYou.innerText = geThanks;
          text.innerText = geText;
          break;
      }
    };
}

thankYou.innerText = seThanks;
text.innerText = seText;