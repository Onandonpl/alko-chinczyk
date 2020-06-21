const fields = [
  "Start",
  "Piją wszyscy",
  "Piją ci ktorzy maja kolorowa bielizne",
  "Idziesz na pole 10",
  "Pija osoby z farbowanymi wlosami",
  "Pije osoba po lewej",
  "Rzucacie koscia, parzyste = pijesz",
  "7",
  "Pije osoba naprzeciwko",
  "Omijasz kolejke",
  "Pije gospodarz",
  "Pije brazowooki",
  "Wracasz na start i pijesz",
  "Idziesz na pole 23",
  "pija bezrobotni",
  "pije ten ktory ostatni przeklnie",
  "pija dziewczyny",
  "pija jedynaki",
  "wracasz na start",
  "pije ten ktory jest najblizszy urodzin",
  "pija niebieskooki",
  "pijesz i idziesz na pole 30",
  "rzucacie koscia parzyste=pijesz",
  "23",
  "pija chlopacy",
  "zamieniasz sie miejscem z najblizszym chlopakiem",
  "pija okularnicy",
  "wszycy pija oprocz ciebie",
  "pijy osoby z rodzenstwem",
  "pija blondyni",
  "pije osoba po prawej",
  "nie pijesz jesli zgadniesz date urodzenia osoby po prawej",
  "pije ten kto ma czarne spodnie i wracasz na 23",
  "pije ten ktory mial niedawno urodziny",
  "34",
  "idziesz do najblizszego pionka i pijesz z nim",
  "pije najblizszy i najdalszy pionek od mety",
  "pija ci w parzystym miesiacu",
  "osoba ktora dotknie cie jako ostatnia pije",
  "osoba po lewej daje wyzwanie",
  "pija ci ktorzy mieli cos zlamanego",
  "pije ten kto nie zaspiewa czarne oczy",
  "pija single",
  "kazesz wypic 2 wybranym osobom",
  "44",
  "nikt nie pije",
  "pija bruneci",
  "grupa wymysla wyzwanie",
  "pije najmlodszy",
  "pija pracujacy",
  "wybierasz osobe ktora ma sie napic",
  "pije najwyzszy",
  "pija osoby nie stad",
  "pija palacy",
  "pije osoba z najmniejsza stopa",
  "55",
  "pije osoba z zegarkiem na rece",
  "ppijesz i zmieniasz sie ubraniem z osoba po lewej",
  "pija posiadacze zwierzat",
  "pije najstarszy",
  "osoba po prawej mowi date ur zle=pijesz",
  "pija rudzi",
  "pija ci w nieparzystym miesiacu",
  "pije najnizszy",
  "64",
  "pije ten najblizej domu",
  "pije oosba z kolczykami",
  "omijasz kolejke",
  "pija ci ktorzy ida do szkoly",
  "pija osoby w zwiazku",
  "pija osoby z ciemna bielizna",
  "pija niepalacy",
  "pije osoba z najwieksza stopa",
  "pijesz i cofasz sie na pole 59",
  "pija wszyscy oprocz ciebie",
  "pija ci ktorzy sa w zawodowce i wracaja na 68",
  "wracasz na 67 i pijesz",
  "osoba po prawej daje wyzwanie",
  "wszycy pija",
  "meta",
];
const board = document.querySelector(".board");
const roll = document.querySelector(".roll");
const rollBtn = document.querySelector(".roll");
const formPlayer = document.querySelector(".generatePlayer");
const start = document.querySelector(".start");
const playersList = document.querySelector(".players__list");

generateBoard = () => {
  fields.map((option, index) => {
    field = document.createElement("div");
    field.classList.add("field");
    field.innerHTML = `
    <div class="field__content">
    <div class="field__number">${index}
    </div>
    <div class="field__content">${option}
    </div>
    </div>
    <div class="players">
    </div>`;

    field.setAttribute("data-num", index);
    board.appendChild(field);
  });
};
generateRandom = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

colorChanger = () => {
  return `rgb(${generateRandom(255, 0)},${generateRandom(
    255,
    0
  )},${generateRandom(255, 0)}`;
};

playerPosition = (con1, con2) => {
  document
    .querySelector(`div[data-num="${con1}"]`)
    .querySelector(".players")
    .appendChild(con2);
};

generatePlayer = (e) => {
  e.preventDefault();
  player = document.createElement("div");
  player.classList.add("player");
  const playerColor = colorChanger();
  player.style.backgroundColor = playerColor;
  playersList.innerHTML += `<div style="background-color:${playerColor}">${inputPlayer.value}</div>`;
  playerPosition(0, player);
  formPlayer.reset();
};

diceRoll = () => {
  const random = generateRandom(7, 1);
  roll.innerHTML = random;
  return random;
};

startGame = (e) => {
  e.preventDefault();
  formPlayer.classList.add("hide");
  start.classList.add("hide");
  const players = document.querySelectorAll(".player");
  console.log(players);
  [...players].map((item) => {
    let fieldNumber = 0;

    goTo = () => {
      if (fieldNumber <= 79) {
        fieldNumber += diceRoll();
      }
      if (fieldNumber > 79) {
        fieldNumber = 79;
      }
      playerPosition(fieldNumber, item);
      if (fieldNumber === 3) {
        playerPosition(10, item);
        fieldNumber = 10;
      }
      if (fieldNumber === 13) {
        playerPosition(23, item);
        fieldNumber = 23;
      }
      if (fieldNumber === 18) {
        playerPosition(0, item);
        fieldNumber = 0;
      }
      if (fieldNumber === 21) {
        playerPosition(30, item);
        fieldNumber = 30;
      }
      if (fieldNumber === 32) {
        playerPosition(23, item);
        fieldNumber = 23;
      }
      if (fieldNumber === 73) {
        playerPosition(59, item);
        fieldNumber = 59;
      }
      if (fieldNumber === 75) {
        playerPosition(68, item);
        fieldNumber = 68;
      }
      if (fieldNumber === 76) {
        playerPosition(67, item);
        fieldNumber = 67;
      }
    };
    item.addEventListener("click", goTo);
  });
};

rollBtn.addEventListener("click", diceRoll);
formPlayer.addEventListener("submit", generatePlayer);
start.addEventListener("click", startGame);

window.onload = generateBoard();
