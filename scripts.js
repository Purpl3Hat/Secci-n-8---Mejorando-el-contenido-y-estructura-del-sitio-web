function showAlert(onclick) { alert('Pues al parecer no ocurrio nada, clickea en aceptar e intenta denuevo  |￢ ᴥ￢ |'); }

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function () {
        document.querySelector(".nav-links").
            classList.toggle("nav-links-responsive")
    })