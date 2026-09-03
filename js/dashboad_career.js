/* =========================================
   CAREER DATA
========================================= */

const careerData = {

    soc: {

        title: "SOC Analyst",

        completed: 8,

        total: 17,

        milestones: [
            ["Foundations", true],
            ["Networking", true],
            ["Linux", true],
            ["Security Fundamentals", true],
            ["SIEM", false],
            ["Log Analysis", false],
            ["Threat Detection", false],
            ["Incident Response", false],
            ["SOC Analyst", false]
        ]

    },


    pentest: {

        title: "Penetration Tester",

        completed: 6,

        total: 15,

        milestones: [
            ["Networking", true],
            ["Linux", true],
            ["Web Fundamentals", true],
            ["Security Fundamentals", true],
            ["Reconnaissance", true],
            ["Enumeration", true],
            ["Web Exploitation", false],
            ["Privilege Escalation", false],
            ["Reporting", false]
        ]

    },


    cloud: {

        title: "Cloud Security",

        completed: 5,

        total: 14,

        milestones: [
            ["Cloud Fundamentals", true],
            ["Networking", true],
            ["Linux", true],
            ["IAM", true],
            ["Cloud Security Basics", true],
            ["Container Security", false],
            ["Cloud Monitoring", false],
            ["Threat Detection", false],
            ["Cloud Incident Response", false]
        ]

    }

};


/* =========================================
   ELEMENTS
========================================= */

const tabs =
    document.querySelectorAll(".career-tab");

const cardTitle =
    document.querySelector(".card-title");

const completionText =
    document.querySelector(".completion-text");

const milestonesList =
    document.querySelector(".milestones-list");

const progressNumber =
    document.querySelector(".progress-number");

const progressFill =
    document.querySelector(".progress-fill");

const progressCount =
    document.querySelector(".progress-count");

const themeToggle =
    document.getElementById("themeToggle");


/* =========================================
   DARK / LIGHT TOGGLE
   SAME STYLE AS UTILITIES PAGE
========================================= */


if (themeToggle) {

    themeToggle.addEventListener("change", function () {

        document.body.classList.toggle(
            "dark",
            this.checked
        );

    });

}


/* =========================================
   CAREER TAB CLICK
========================================= */

tabs.forEach(function (tab) {

    tab.addEventListener("click", function () {

        const path =
            this.dataset.path;

        changeCareer(path);

    });

});


/* =========================================
   CHANGE CAREER
========================================= */

function changeCareer(path) {

    const career =
        careerData[path];


    /* Stop if career does not exist */

    if (!career) {
        return;
    }


    /* =====================================
       ACTIVE CAREER TAB
    ====================================== */

    tabs.forEach(function (tab) {

        tab.classList.remove("active");

    });


    const activeTab =
        document.querySelector(
            `.career-tab[data-path="${path}"]`
        );


    if (activeTab) {

        activeTab.classList.add("active");

    }


    /* =====================================
       CARD TITLE
    ====================================== */

    if (cardTitle) {

        cardTitle.textContent =
            career.title;

    }


    /* =====================================
       COMPLETION TEXT
    ====================================== */

    if (completionText) {

        completionText.textContent =
            `${career.completed} of ${career.total} milestones completed`;

    }


    /* =====================================
       CALCULATE PROGRESS
    ====================================== */

    const percentage =
        Math.round(
            (career.completed / career.total) * 100
        );


    /* =====================================
       PROGRESS NUMBER
    ====================================== */

    if (progressNumber) {

        progressNumber.textContent =
            `${percentage}%`;

    }


    /* =====================================
       PROGRESS BAR
    ====================================== */

    if (progressFill) {

        progressFill.style.width =
            `${percentage}%`;

    }


    /* =====================================
       PROGRESS COUNT
    ====================================== */

    if (progressCount) {

        progressCount.textContent =
            `${career.completed} / ${career.total} milestones`;

    }


    /* =====================================
       MILESTONES
    ====================================== */

    if (milestonesList) {

        /* Clear old milestones */

        milestonesList.innerHTML = "";


        /* Create new milestones */

        career.milestones.forEach(function (item) {

            const name =
                item[0];

            const completed =
                item[1];


            const milestone =
                document.createElement("div");


            /* Completed / upcoming class */

            if (completed) {

                milestone.className =
                    "milestone completed";

            } else {

                milestone.className =
                    "milestone upcoming";

            }


            /* Milestone HTML */

            milestone.innerHTML = `

                <div class="milestone-dot"></div>

                <div class="milestone-name">
                    ${name}
                </div>

                <div class="milestone-status">
                    ${
                        completed
                            ? "COMPLETED"
                            : "UPCOMING"
                    }
                </div>

            `;


            /* Add to page */

            milestonesList.appendChild(
                milestone
            );

        });

    }

}


/* =========================================
   INITIALIZE CAREER PAGE
========================================= */

changeCareer("soc");