document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.getElementById("timeline-content");
    const chapters = document.querySelector(".chapter-list");

    // Função para mostrar o elemento na rolagem
    const showOnScroll = (element) => {
        const scrollPosition = window.innerHeight + window.scrollY;
        if (scrollPosition > element.offsetTop + 100) {
            element.classList.add("visible");
        }
    };

    // Adiciona a classe de visibilidade para animação
    window.addEventListener("scroll", () => {
        showOnScroll(timeline);
        showOnScroll(chapters);
    });
});
