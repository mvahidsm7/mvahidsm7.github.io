// JavaScript
window.addEventListener("scroll", function() {
    const fadeDiv = document.querySelector(".fade-on-scroll");
    const scrollPosition = window.scrollY; // Posisi scroll dari atas

    // Tentukan tinggi di mana opasitas mulai berkurang
    const startFade = 35;  // Mulai berkurang setelah 100px scroll
    const endFade = 100;    // Hilang sepenuhnya setelah 500px scroll

    if (scrollPosition > startFade) {
        // Menghitung opasitas berdasarkan posisi scroll
        let opacity = 1 - (scrollPosition - startFade) / (endFade - startFade);
        fadeDiv.style.opacity = Math.max(opacity, 0); // Opasitas tidak kurang dari 0
    } else {
        fadeDiv.style.opacity = 1; // Tetap 1 sebelum posisi startFade
    }
});
