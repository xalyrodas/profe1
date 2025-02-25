document.addEventListener("DOMContentLoaded", function() {
    mostrarMenu();
});

function mostrarMenu() {
    const header = document.createElement("header");
    header.innerHTML = `
        <div>
            <button id="closeButton">X</button> Productos marcados <span id="contador">0</span>
        </div>
    `;
    document.body.prepend(header);

    // Opcional: Añadir acción al botón de cierre
    const closeButton = document.getElementById('closeButton');
    closeButton.addEventListener('click', () => {
        header.style.display = 'none'; // Esconde el header al hacer clic en el botón X
    });
}
