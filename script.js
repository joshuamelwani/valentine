const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const card = document.getElementById("card");

/* Move No button (mouse + touch) */
function moveNo() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* Yes click → confetti + yay */
yesBtn.addEventListener("click", () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  card.innerHTML = `
    <h1>YAY!!! 💖</h1>
    <img
      src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
      width="250"
    />
  `;
});
