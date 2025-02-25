function crearProducto(producto) {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.dataset.id = producto.id;
    div.innerHTML = `
        <div class="imagen">🎯</div>
        <p>${producto.nombre}</p>
        <p>Q ${producto.precio.toFixed(2)}</p>
        <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
    `;
    return div;
}