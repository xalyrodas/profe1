document.addEventListener("DOMContentLoaded", () => {
    const header = document.createElement("header");
    header.id = "header";
    header.innerHTML = `
        <h1>Mostrar Producto</h1>
        <span id="contador">0</span>
    `;
    document.body.insertBefore(header, document.body.firstChild);

    header.addEventListener("click", () => {
        alert(`Llevas ${carrito.length} productos en el carrito.`);
    });
});
