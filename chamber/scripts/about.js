// Morphy hamburger Menu and Main Nav fade Animation
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.querySelector("#main-nav ul");

    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("show");
        menuToggle.classList.toggle("open"); // 🔁 Toggle the hamburger animation
    });
});