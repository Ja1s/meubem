function lightButton() {
    var botao = document.createElement("button");
    botao.innerHTML = "<i class='ri-sun-fill'></i>";
    botao.className = "light-button";
    
    botao.style.backgroundColor = "transparent";
    botao.style.border = "none";
    botao.style.cursor = "pointer";

    var icone = botao.querySelector("i");
    icone.style.color = "var(--bs-yellow)";

    botao.addEventListener('click', function () {
        var body = document.body;
        body.classList.toggle('light-mode');

        var icones = document.querySelectorAll('#top a i, .menu-left a i');
        icones.forEach(function(icon) {
            if (icon.classList.contains('ri-github-fill')) {
                icon.classList.replace('ri-github-fill', 'ri-github-line');
            } else if (icon.classList.contains('ri-github-line')) {
                icon.classList.replace('ri-github-line', 'ri-github-fill');
            }

            if (icon.classList.contains('ri-linkedin-box-fill')) {
                icon.classList.replace('ri-linkedin-box-fill', 'ri-linkedin-box-line');
            } else if (icon.classList.contains('ri-linkedin-box-line')) {
                icon.classList.replace('ri-linkedin-box-line', 'ri-linkedin-box-fill');
            }

            if (icon.classList.contains('ri-mail-fill')) {
                icon.classList.replace('ri-mail-fill', 'ri-mail-line');
            } else if (icon.classList.contains('ri-mail-line')) {
                icon.classList.replace('ri-mail-line', 'ri-mail-fill');
            }
            icon.style.color = body.classList.contains('light-mode') ? 'var(--bs-indigo)' : 'var(--bs-yellow)';
        });

        if (icone.classList.contains('ri-sun-fill')) {
            icone.classList.replace('ri-sun-fill', 'ri-moon-line');
        } else if (icone.classList.contains('ri-moon-line')) {
            icone.classList.replace('ri-moon-line', 'ri-sun-fill');
        }
        
        icone.style.color = body.classList.contains('light-mode') ? 'var(--bs-indigo)' : 'var(--bs-yellow)';
    });

    var container = document.getElementById("light-container");
    container.appendChild(botao);
}

lightButton();
