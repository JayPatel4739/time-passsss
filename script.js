const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const buttonsArea = document.querySelector(".buttons");
const questionCard = document.getElementById("questionCard");
const celebrateCard = document.getElementById("celebrateCard");

function moveNoButton() {
  const areaWidth = buttonsArea.offsetWidth;
  const areaHeight = buttonsArea.offsetHeight;

  // RIGHT SIDE ONLY (YES se door)
  const minX = areaWidth / 2;
  const maxX = areaWidth - noBtn.offsetWidth;

  const minY = 10;
  const maxY = areaHeight - noBtn.offsetHeight - 10;

  const randomX = Math.random() * (maxX - minX) + minX;
  const randomY = Math.random() * (maxY - minY) + minY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Hover par bhi
noBtn.addEventListener("mouseenter", moveNoButton);

// Click par bhi
noBtn.addEventListener("click", (e) => {
  e.preventDefault();   // just in case
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  questionCard.style.display = "none";
  celebrateCard.style.display = "block";

  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
});