document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    // Realiza aquí las acciones necesarias antes de moverte de índice
    window.location.href = "./../index/menu.html"; // Cambia "ruta_al_otro_index.html" por la ruta correcta del otro índice
}); 