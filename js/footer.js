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

            // Remove active state from all cards
            featureCards.forEach(function (item) {
                item.classList.remove("active-card");
            });


            // Add active state to clicked card
            card.classList.add("active-card");

        });

    });


    /* ==========================================
       BUTTON INTERACTION
    ========================================== */

    const primaryButton =
        document.querySelector(".primary-btn");


    if (primaryButton) {

        primaryButton.addEventListener("click", function () {

            console.log("Entering CYBERM workspace...");

        });

    }


});