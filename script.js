document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const toggleButton = document.getElementById("nav-toggle");
    const navLinks = document.querySelector("nav ul");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            if (!this.getAttribute("href").endsWith(".html")) {
                e.preventDefault();
            }

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        });
    });

    toggleButton.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});
