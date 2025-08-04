const button = document.getElementById("magicButton");

button.addEventListener("click", (e) => {
  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${e.clientX + Math.random() * 40 - 20}px`;
    sparkle.style.top = `${e.clientY + Math.random() * 20 - 10}px`;
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 800);
  }
});

// Cursor Sparkle Effect Start//

document.addEventListener('mousemove', (e) => {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle-cursor';
  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 500); // cleanup
});

// Cursor Sparkle Effect End//


// Pixie Dust Rain Effect Start//

let rainingDust = false;
let rainInterval;

document.getElementById("pixieRainBtn").addEventListener("click", () => {
  if (!rainingDust) {
    rainingDust = true;
    rainInterval = setInterval(() => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle-drop";
      sparkle.style.left = `${Math.random() * window.innerWidth}px`;
      sparkle.style.top = `-20px`;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 2000);
    }, 100); // drops a sparkle every 100ms
  } else {
    rainingDust = false;
    clearInterval(rainInterval);
  }
});
// Pixie Dust Rain Effect End//

