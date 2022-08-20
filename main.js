const scoreHome = document.getElementById("home");
const scoreGuest = document.getElementById("guest");
const period = document.getElementById("period");
const playerNumber = document.getElementById("player");
const foultsNumber = document.getElementById("foults");
let homeScore = 0;
let guestScore = 0;
let periodNumber = 0;
let playerNr = 24;
let foultNr = 0;
playerNumber.textContent = playerNr;
// Add one

function addOneHome() {
  homeScore++;
  scoreHome.textContent = homeScore;
}
function addOneGuest() {
  guestScore++;
  scoreGuest.textContent = guestScore;
}

// Add two

function addTwoHome() {
  homeScore = homeScore + 2;
  scoreHome.textContent = homeScore;
}
function addTwoGuest() {
  guestScore = guestScore + 2;
  scoreGuest.textContent = guestScore;
}

// Add three

function addThreeHome() {
  homeScore = homeScore + 3;
  scoreHome.textContent = homeScore;
}
function addThreeGuest() {
  guestScore = guestScore + 3;
  scoreGuest.textContent = guestScore;
}

// Period

function periodNr() {
  if (periodNumber < 4) {
    periodNumber++;
    period.textContent = periodNumber;
  } else {
    periodNumber = 4;
    period.textContent = periodNumber;
  }
}

// Players

function addPlayers() {
  if (playerNr < 24) {
    playerNr++;
    playerNumber.textContent = playerNr;
  } else {
    playerNr = 24;
    playerNumber.textContent = playerNr;
  }
}

function substractPlayers() {
  if (playerNr > 1) {
    playerNr--;
    playerNumber.textContent = playerNr;
  } else {
    playerNr = 0;
    playerNumber.textContent = playerNr;
  }
}

// foults

function foultAdd() {
  foultNr++;
  foultsNumber.textContent = foultNr;
}

// new game

function newGame() {
  homeScore = 0;
  guestScore = 0;
  periodNumber = 0;
  playerNr = 0;
  foultNr = 0;

  scoreHome.textContent = 0;
  scoreGuest.textContent = 0;
  period.textContent = 0;
  playerNumber.textContent = 24;
  foultsNumber.textContent = 0;
}
