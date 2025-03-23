document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
