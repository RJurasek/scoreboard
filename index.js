const homeScore = document.getElementById("home-score");
const awayScore = document.getElementById("away-score");

let homeCount = 0;
let awayCount = 0;

function addOneHome() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function addTwoHome() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function addThreeHome() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

function addOneAway() {
    awayCount += 1;
    awayScore.textContent = awayCount;
}


function addTwoAway() {
    awayCount += 2;
    awayScore.textContent = awayCount;
}


function addThreeAway() {
    awayCount += 3;
    awayScore.textContent = awayCount;
}

function reset() {
    homeCount = 0;
    awayCount = 0;
    homeScore.textContent = 0;
    awayScore.textContent = 0;
}