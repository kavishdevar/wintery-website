document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".calendar-card");

    cards.forEach(card => {
        const targetDate = new Date(card.getAttribute("data-date"));
        const countdownElement = card.querySelector(".countdown");

        const updateCountdown = () => {
            const now = new Date();
            const diff = targetDate - now;

            if (diff <= 0) {
                countdownElement.textContent = card.getAttribute("data-message");
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        };
        updateCountdown();
        setInterval(updateCountdown, 1000);
    });

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflake.textContent = "❄";
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.fontSize = `${Math.random() * 10 + 16}px`;

        const snowflakesContainer = document.querySelector(".snowflakes");
        if (snowflakesContainer) {
            snowflakesContainer.appendChild(snowflake);
        }

        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    setInterval(createSnowflake, 200);
});
