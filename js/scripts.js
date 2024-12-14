// Script para o header.
window.addEventListener("scroll", () => {
    const heroSection = document.querySelector("#hero_content");
    let scrollPosition = window.pageYOffset;
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.2}px`;
});

// Script para identificar quando a imagem estiver visível.
window.addEventListener("scroll", () => {
    const heroSection = document.querySelector("#hero_content");
    let scrollPosition = window.pageYOffset;
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});
