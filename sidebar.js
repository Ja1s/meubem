document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("openSidebar").addEventListener("click", function (event) {
        console.log("Botão do menu clicado"); // Teste se esse log aparece
        var sidebar = document.getElementById("sidebar");
        if (sidebar.style.left === "0px") {
            sidebar.style.left = "-100%";
        } else {
            sidebar.style.left = "0";
        }
        event.stopPropagation();
    });
});