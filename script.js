document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing");
  const songLyrics =
    "Happy birthday to you... Happy birthday to you... Happy birthday to you Gloryyy... Happy birthday to you... ";
  let index = 0;

  function typeLyrics() {
    typingElement.textContent = songLyrics.slice(0, index);
    index++;

    if (index > songLyrics.length) {
      index = 0;
      setTimeout(typeLyrics, 1000);
    } else {
      setTimeout(typeLyrics, 150);
    }
  }

  typeLyrics();

  const audio = document.getElementById("music");

  const button = document.querySelector(".celebrate-button");
  button.addEventListener("click", () => {
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.background = ["#ff4a4a", "#ffd700", "#4aff4a", "#4a4aff"][
        Math.floor(Math.random() * 4)
      ];
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = Math.random() * 2 + 3 + "s";
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 4000);
    }

    for (let i = 0; i < 20; i++) {
      const firework = document.createElement("div");
      firework.classList.add("firework");
      firework.style.background = ["#ff4a4a", "#ffd700", "#4aff4a", "#4a4aff"][
        Math.floor(Math.random() * 4)
      ];
      firework.style.left = Math.random() * 100 + "vw";
      firework.style.top = Math.random() * 100 + "vh";
      document.body.appendChild(firework);
      setTimeout(() => firework.remove(), 1500);
    }
  });
});
