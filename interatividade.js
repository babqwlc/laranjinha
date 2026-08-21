document.addEventListener('DOMContentLoaded', () => {
    // Contador de Curtidas Interativo
    const likeBtn = document.getElementById('likeBtn');
    const likeCountSpan = document.getElementById('likeCount');
    let count = 128;
    let liked = false;

    likeBtn.addEventListener('click', () => {
        if (!liked) {
            count++;
            likeCountSpan.textContent = count;
            likeBtn.style.backgroundColor = '#27ae60';
            likeBtn.innerHTML = `❤️ Curtido! (${count})`;
            liked = true;
        } else {
            count--;
            likeCountSpan.textContent = count;
            likeBtn.style.backgroundColor = 'var(--navy-dark)';
            likeBtn.innerHTML = `❤️ Curtir Edição (${count})`;
            liked = false;
        }
    });

    // Animação de entrada suave nos itens da linha do tempo
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });
});