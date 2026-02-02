const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const buttonsArea = document.querySelector(".buttons");
const message = document.getElementById("message");

function moveNoButton(intensity = 1) {
  const padding = 8;
  const areaWidth = buttonsArea.offsetWidth;
  const areaHeight = buttonsArea.offsetHeight;

  const minX = 15;
  const maxX = areaWidth - noBtn.offsetWidth - padding;
  const minY = padding;
  const maxY = areaHeight - noBtn.offsetHeight - padding;

  let randomX =
    Math.random() * (maxX - minX) * intensity + minX;
  let randomY =
    Math.random() * (maxY - minY) * intensity + minY;

  randomX = Math.max(minX, Math.min(randomX, maxX));
  randomY = Math.max(minY, Math.min(randomY, maxY));

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Hover + click
noBtn.addEventListener("mouseenter", () => moveNoButton(1));
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton(1.8);
});

// YES CLICK
yesBtn.addEventListener("click", () => {
  yesBtn.classList.add("clicked");

  message.style.display = "block";
  message.textContent = "I knew it 💖";

  // 🎉 Confetti
  confetti({
    particleCount: 260,
    spread: 120,
    origin: { y: 0.6 }
  });

  // 📧 EMAIL NOTIFICATION
  emailjs.send(
    "service_cug6f7x",   // Email Service ID
    "template_29tq1vg",  // Email Template ID
    {
      message: "YES ho gaya 😍 Someone clicked YES on your Valentine page!"
    }
  );
});
