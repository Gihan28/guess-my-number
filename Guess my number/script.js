'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const checkIfScoreIsZero = function () {
  if (score === 0) {
    document.querySelector(`.check`).setAttribute('disabled', 'disabled');
    document.querySelector(`.message`).textContent = `💥 You have lost! :(`;
    return true;
  }
  return false;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  if (!guess || guess > 20 || guess < 0) {
    document.querySelector(`.message`).textContent = `⛔ No number!`;
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`body`).style.backgroundColor = `#60b347`;
      document.querySelector(`.number`).style.width = `30rem`;
    }
    document.querySelector(`.check`).textContent = `Congrats!`;
    document.querySelector(`.check`).setAttribute('disabled', 'disabled');
  } else if (guess > secretNumber) {
    document.querySelector(`.message`).textContent = `📈 Too high!`;
    score--;
    checkIfScoreIsZero();
    document.querySelector(`.score`).textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(`.message`).textContent = `📉 Too low!`;
    score--;
    checkIfScoreIsZero();
    document.querySelector(`.score`).textContent = score;
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`.score`).textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(Math.trunc(Math.random() * 20) + 1);
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.check`).removeAttribute(`disabled`);
  document.querySelector(`.check`).textContent = `Check!`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.guess`).value = null;
});
