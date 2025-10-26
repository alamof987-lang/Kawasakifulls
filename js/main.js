document.addEventListener('DOMContentLoaded', function() {
    const botonAyuda = document.getElementById('boton-ayuda');
    const menuFlotante = document.getElementById('menu-flotante');

    function alternarMenu() {
        menuFlotante.classList.toggle('menu-visible');
    }

    botonAyuda.addEventListener('click', alternarMenu);
    menuFlotante.addEventListener('click', alternarMenu);
});