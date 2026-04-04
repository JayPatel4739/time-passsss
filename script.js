const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const questionScreen = document.getElementById("questionScreen");
const wishScreen = document.getElementById("wishScreen");

function moveYesButton() {
  const area = document.querySelector(".buttons");
  const pad = 8;
  const maxX = area.offsetWidth  - yesBtn.offsetWidth  - pad;
  const maxY = area.offsetHeight - yesBtn.offsetHeight - pad;
  yesBtn.style.left = Math.max(pad, Math.random() * maxX) + "px";
  yesBtn.style.top  = Math.max(pad, Math.random() * maxY) + "px";
}

yesBtn.addEventListener("mouseenter", moveYesButton);
yesBtn.addEventListener("click", moveYesButton);

noBtn.addEventListener("click", () => {
  questionScreen.classList.add("hidden");
  wishScreen.classList.remove("hidden");
  yesBtn.style.display = "none";

  confetti({ particleCount: 200, spread: 120, origin: { y: 0.6 } });
  setTimeout(() => {
    confetti({ particleCount: 100, angle: 60,  spread: 80, origin: { x: 0, y: 0.7 } });
    confetti({ particleCount: 100, angle: 120, spread: 80, origin: { x: 1, y: 0.7 } });
  }, 600);
});
