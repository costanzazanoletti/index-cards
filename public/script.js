const range = 100;
const deckSize = 20;
let currentIndex = -1;

const getRandomInRange = (range) => {
  return (
    Math.ceil(Math.random() * range) * (Math.round(Math.random()) ? 1 : -1)
  );
};

let cardValues = Array.from({ length: deckSize }, () =>
  getRandomInRange(range)
);

const getNextValue = () => {
  console.log(`current index ${currentIndex}`);
  currentIndex < deckSize - 1 ? currentIndex++ : (currentIndex = 0);
  return cardValues[currentIndex];
};

const showNextCard = (event) => {
  document.querySelector('#card p').innerText = getNextValue();
};

let card = document.querySelector('#card');

card.addEventListener('click', showNextCard);
