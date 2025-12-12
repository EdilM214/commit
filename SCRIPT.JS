document.addEventListener("DOMContentLoaded", function() {
    var dropdownToggle = document.querySelector(".dropdown-toggle");
    var submenu = document.querySelector(".submenu");
    var menuItem = document.querySelector(".menu-item");
    var btn = document.getElementById("btn");

    if (btn) {
        btn.addEventListener("click", function() {
            alert("¡Gracias por visitar mi página!");
        });
    }

    if (dropdownToggle && submenu) {
        dropdownToggle.addEventListener("click", function(e) {
            e.preventDefault();
            if (submenu.style.display === "flex") {
                submenu.style.display = "none";
            } else {
                submenu.style.display = "flex";
            }
        });

        var items = submenu.querySelectorAll("a");
        for (var i = 0; i < items.length; i++) {
            items[i].addEventListener("click", function(e) {
                submenu.style.display = "none";
            });
        }
    }

    document.addEventListener("click", function(e) {
        if (menuItem && !menuItem.contains(e.target) && submenu) {
            submenu.style.display = "none";
        }
    });
});