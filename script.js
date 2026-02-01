const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const buttonsArea = document.querySelector(".buttons");
const message = document.getElementById("message");

function moveNoButton(intensity = 1) {
  const padding = 12;
  const areaWidth = buttonsArea.offsetWidth;
  const areaHeight = buttonsArea.offsetHeight;

  // Right side only (YES se door)
  const minX = areaWidth / 2 + padding;
  const maxX = areaWidth - noBtn.offsetWidth - padding;

  const minY = padding;
  const maxY = areaHeight - noBtn.offsetHeight - padding;

  // intensity = 1 → hover
  // intensity = 1.6 → click (drastic jump)
  const randomX =
    Math.random() * (maxX - minX) * intensity + minX;
  const randomY =
    Math.random() * (maxY - minY) * intensity + minY;

  noBtn.style.left = Math.min(randomX, maxX) + "px";
  noBtn.style.top = Math.min(randomY, maxY) + "px";
}

// Hover → normal jump
noBtn.addEventListener("mouseenter", () => {
  moveNoButton(1);
});

// Click → DRASTIC jump
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton(1.6);
});

yesBtn.addEventListener("click", () => {
  // Color change
  yesBtn.classList.add("clicked");

  // Show message
  message.style.display = "block";
  message.textContent = "I knew it 😏💖";

  // Confetti
  confetti({
    particleCount: 250,
    spread: 110,
    origin: { y: 0.6 }
  });
});
