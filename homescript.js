"use strict";

const startButton = document.querySelector(".start");
const header = document.querySelector(".hero");
const main = document.querySelector(".starting-buttons");
const content = document.querySelector(".game-content");

const overlay = document.querySelector(".overlay");
const gamePlay = document.querySelector(".gameplay");
const openRulesButton = document.querySelector(".rules");
const closeRulesButton = document.querySelector(".xIcon");

const openRules = function () {
  overlay.classList.remove("hidden");
  gamePlay.classList.remove("hidden");
};

const closeRules = function () {
  overlay.classList.add("hidden");
  gamePlay.classList.add("hidden");
};
openRulesButton.addEventListener("click", openRules);
closeRulesButton.addEventListener("click", closeRules);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !gamePlay.classList.contains("hidden")) {
    overlay.classList.add("hidden");
    gamePlay.classList.add("hidden");
  }
});
