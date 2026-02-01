const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const buttonsArea = document.querySelector(".buttons");
const message = document.getElementById("message");

function moveNoButton(intensity = 1) {
  const padding = 8; // border ke andar rahe
  const areaWidth = buttonsArea.offsetWidth;
  const areaHeight = buttonsArea.offsetHeight;

  // YES ke paas aane dena (thoda overlap allowed 😈)
  const minX = 15;
  const maxX = areaWidth - noBtn.offsetWidth - padding;

  const minY = padding;
  const maxY = areaHeight - noBtn.offsetHeight - padding;

  let randomX =
    Math.random() * (maxX - minX) * intensity + minX;
  let randomY =
    Math.random() * (maxY - minY) * intensity + minY;

  // Clamp so button bahar na jaye
  randomX = Math.max(minX, Math.min(randomX, maxX));
  randomY = Math.max(minY, Math.min(randomY, maxY));

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Hover → bhaag
noBtn.addEventListener("mouseenter", () => {
  moveNoButton(1);
});

// Click → aur zyada bhaag (teleport feel)
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton(1.8);
});

// YES → victory 🎉
yesBtn.addEventListener("click", () => {
  yesBtn.classList.add("clicked");

  message.style.display = "block";
  message.textContent = "I knew it 😏💖";

  confetti({
    particleCount: 260,
    spread: 120,
    origin: { y: 0.6 }
  });
});
