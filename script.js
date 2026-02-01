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
    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTV6ZGhjempvcDI2bnhhcm1oMzN2Y2RhamxmZXZuemo0d3F5N20zdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gRD25J7DvvTQQ/giphy.gif"
    width="250"
  />

  <p class="tease"> More on 7th Feb 😈</p>
`;
});
