/* ==========================================
   CYBERM JAVASCRIPT
========================================== */


document.addEventListener("DOMContentLoaded", function () {


    /* ==========================================
       FEATURE CARD INTERACTION
    ========================================== */

    const featureCards = document.querySelectorAll(".feature-card");


    featureCards.forEach(function (card) {

        card.addEventListener("click", function () {

            featureCards.forEach(function (item) {
                item.classList.remove("active-card");
            });


            card.classList.add("active-card");

        });

    });


    /* ==========================================
       MOBILE MENU BUTTON
    ========================================== */

    const mobileMenuButton =
        document.getElementById("mobileMenuBtn");


    mobileMenuButton.addEventListener("click", function () {

        alert("Mobile navigation can be added here.");

    });


    /* ==========================================
       SMOOTH BUTTON FEEDBACK
    ========================================== */

    const primaryButton =
        document.querySelector(".primary-btn");


    if (primaryButton) {

        primaryButton.addEventListener("click", function () {

            console.log("Entering CYBERM workspace...");

        });

    }


});