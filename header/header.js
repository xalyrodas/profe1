document.addEventListener("DOMContentLoaded", () => {
    mostrarMenu();
});

function mostrarMenu() {
    const header = document.createElement("header");
    header.innerHTML = `
        <div>
            <button>X</button> Productos marcados <span id="contador">0</span>
        </div>
    `;
    document.body.prepend(header);
}