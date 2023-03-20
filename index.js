const homeScore = document.getElementById("home-score");
const awayScore = document.getElementById("away-score");

let homeCount = 0;
let awayCount = 0;

function addHome(a) {
    homeCount += a;
    homeScore.textContent = homeCount;
}

function addAway(a) {
    awayCount += a;
    awayScore.textContent = awayCount;
}

function reset() {
    homeCount = 0;
    awayCount = 0;
    homeScore.textContent = 0;
    awayScore.textContent = 0;
}