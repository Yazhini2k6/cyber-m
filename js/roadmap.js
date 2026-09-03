document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       THEME TOGGLE
    ====================================== */

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");


    // Get saved theme

    const savedTheme =
        localStorage.getItem("cyberm-theme");


    if (savedTheme) {

        document.documentElement.setAttribute(
            "data-theme",
            savedTheme
        );

        themeIcon.textContent =
            savedTheme === "dark" ? "☀" : "☾";

    }


    // Toggle theme

    themeToggle.addEventListener("click", function () {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");


        const newTheme =
            currentTheme === "dark"
                ? "light"
                : "dark";


        document.documentElement.setAttribute(
            "data-theme",
            newTheme
        );


        localStorage.setItem(
            "cyberm-theme",
            newTheme
        );


        themeIcon.textContent =
            newTheme === "dark"
                ? "☀"
                : "☾";

    });


    /* =====================================
       ROADMAP FILTER
    ====================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const roadmapCards =
        document.querySelectorAll(".roadmap-card");

    const emptyState =
        document.getElementById("emptyState");


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Remove active state

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            // Add active state

            button.classList.add("active");


            const filter =
                button.dataset.filter;


            let visibleCards = 0;


            roadmapCards.forEach(function (card) {

                const category =
                    card.dataset.category;


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.style.display = "flex";

                    visibleCards++;

                } else {

                    card.style.display = "none";

                }

            });


            emptyState.style.display =
                visibleCards === 0
                    ? "block"
                    : "none";

        });

    });


    /* =====================================
       ROADMAP SEARCH
    ====================================== */

    const searchInput =
        document.getElementById("roadmapSearch");


    searchInput.addEventListener("input", function () {

        const searchValue =
            searchInput.value.toLowerCase().trim();


        let visibleCards = 0;


        roadmapCards.forEach(function (card) {

            const title =
                card.querySelector("h3")
                    .textContent
                    .toLowerCase();


            const description =
                card.querySelector("p")
                    .textContent
                    .toLowerCase();


            if (
                title.includes(searchValue) ||
                description.includes(searchValue)
            ) {

                card.style.display = "flex";

                visibleCards++;

            } else {

                card.style.display = "none";

            }

        });


        emptyState.style.display =
            visibleCards === 0
                ? "block"
                : "none";

    });


    /* =====================================
       ROADMAP PREVIEW
    ====================================== */

    const roadmapButtons =
        document.querySelectorAll(".view-roadmap-btn");

    const roadmapPreview =
        document.getElementById("roadmapPreview");

    const selectedRoadmapTitle =
        document.getElementById("selectedRoadmapTitle");

    const closePreview =
        document.getElementById("closePreview");


    roadmapButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card =
                button.closest(".roadmap-card");


            const roadmapTitle =
                card.querySelector("h3").textContent;


            selectedRoadmapTitle.textContent =
                roadmapTitle + " Roadmap";


            roadmapPreview.classList.add("show");


            roadmapPreview.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });


    /* =====================================
       CLOSE ROADMAP PREVIEW
    ====================================== */

    closePreview.addEventListener("click", function () {

        roadmapPreview.classList.remove("show");

    });


});