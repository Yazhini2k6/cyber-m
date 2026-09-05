/* =========================================
   SIDEBAR
========================================= */

const sidebarItems =
    document.querySelectorAll(".sidebar-item");


/* =========================================
   ACTIVE SIDEBAR ITEM
========================================= */

sidebarItems.forEach(function (item) {

    item.addEventListener("click", function (event) {

        event.preventDefault();


        /* Remove active from all items */

        sidebarItems.forEach(function (link) {

            link.classList.remove("active");

        });


        /* Add active to clicked item */

        this.classList.add("active");

    });

});