/* ==========================================
   CYBERM JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ==========================================
       THEME TOGGLE
    ========================================== */

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    const savedTheme = localStorage.getItem("cyberm-theme");

    // Load saved theme
    if (savedTheme === "dark") {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

        themeIcon.textContent = "☀";

    } else {

        document.documentElement.setAttribute(
            "data-theme",
            "light"
        );

        themeIcon.textContent = "☾";

    }


    // Toggle theme
    themeToggle.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");


        if (currentTheme === "light") {

            document.documentElement.setAttribute(
                "data-theme",
                "dark"
            );

            themeIcon.textContent = "☀";

            localStorage.setItem(
                "cyberm-theme",
                "dark"
            );

        } else {

            document.documentElement.setAttribute(
                "data-theme",
                "light"
            );

            themeIcon.textContent = "☾";

            localStorage.setItem(
                "cyberm-theme",
                "light"
            );

        }

    });


    /* ==========================================
       FEATURE CARD INTERACTION
    ========================================== */

    const featureCards =
        document.querySelectorAll(".feature-card");


    featureCards.forEach(function (card) {

        card.addEventListener("click", function () {

            featureCards.forEach(function (item) {
                item.classList.remove("active-card");
            });

            card.classList.add("active-card");

        });

    });


});