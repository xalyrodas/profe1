let carrito = [];

function agregarProducto(id) {
    if (!carrito.includes(id)) {
        carrito.push(id);
        actualizarContador();
    }
}

function actualizarContador() {
    const contador = document.getElementById("contador");
    if (contador) {
        contador.textContent = carrito.length;
    }
}
