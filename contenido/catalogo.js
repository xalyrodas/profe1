document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
});

function cargarProductos() {
    const contenedor = document.createElement("div");
    contenedor.id = "catalogo";
    document.body.appendChild(contenedor);

    dataProductos.forEach(producto => {
        contenedor.appendChild(crearProducto(producto));
    });
}