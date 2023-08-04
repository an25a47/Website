function createConfetti() {
    const confettiContainer = document.querySelector(".confetti");

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 4}s`;
        confettiContainer.appendChild(confetti);
    }
}

createConfetti();
