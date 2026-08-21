document.addEventListener("DOMContentLoaded", () => {
    // Efeito suave de revelação dos cards conforme o scroll
    const cards = document.querySelectorAll(".paper-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });

    // Clique nas Polaroids para dar um efeito leve de zoom
    const polaroid = document.querySelector(".polaroid-frame");
    if(polaroid) {
        polaroid.addEventListener("click", () => {
            polaroid.classList.toggle("active");
            if(polaroid.classList.contains("active")) {
                polaroid.style.transform = "scale(1.05) rotate(0deg)";
                polaroid.style.transition = "transform 0.3s ease";
            } else {
                polaroid.style.transform = "rotate(2deg)";
            }
        });
    }
});