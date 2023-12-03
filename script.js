document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 30) {
            navbar.style.backgroundColor = "#008000";
        } else {
            navbar.style.backgroundColor = "#00A36C";
        }
    });
});