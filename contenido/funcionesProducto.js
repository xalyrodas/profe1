function eliminarProducto(id) {
    const producto = document.querySelector(`.producto[data-id='${id}']`);
    if (producto) {
        producto.remove();
    }
}