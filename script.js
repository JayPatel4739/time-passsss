const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const buttonsArea = document.querySelector(".buttons");
const message = document.getElementById("message");

function moveNoButton() {
  const padding = 12; // border ke thode andar
  const areaWidth = buttonsArea.offsetWidth;
  const areaHeight = buttonsArea.offsetHeight;

  // RIGHT SIDE ONLY (YES se door)
  const minX = areaWidth / 2 + padding;
  const maxX = areaWidth - noBtn.offsetWidth - padding;

  const minY = padding;
  const maxY = areaHeight - noBtn.offsetHeight - padding;

  const randomX = Math.random() * (maxX - minX) + minX;
  const randomY = Math.random() * (maxY - minY) + minY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Hover + Click dono pe bhaage
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  // Color change
  yesBtn.classList.add("clicked");

  // Message show
  message.style.display = "block";
  message.textContent = "I knew it 😏💖";

  // Confetti
  confetti({
    particleCount: 220,
    spread: 100,
    origin: { y: 0.6 }
  });
});
