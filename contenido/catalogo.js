document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.createElement("div");
    contenedor.id = "catalogo";
    document.body.appendChild(contenedor);

    dataProductos.forEach(producto => {
        const productoElemento = crearProducto(producto);
        contenedor.appendChild(productoElemento);
    });

    contenedor.addEventListener("click", (e) => {
        if (e.target.classList.contains("agregar")) {
            const id = parseInt(e.target.dataset.id);
            agregarProducto(id);
        }
    });
});
